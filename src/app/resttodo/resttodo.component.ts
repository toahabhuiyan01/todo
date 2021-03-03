import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { Tasks } from '../tasks';
import { ResttodoService } from '../resttodo.service';
import { LocalStorageService } from '../local-storage.service';
import { from } from 'rxjs';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-resttodo',
  templateUrl: './resttodo.component.html',
  styleUrls: ['./resttodo.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ResttodoComponent implements OnInit {

  tasks: Tasks[] = [];
  viewTask: any;
  taskSearch : any;
  userLogin: any;
  userAuth: any;

  constructor(public rs: ResttodoService, private router: Router, config: NgbModalConfig, private modalService: NgbModal, public ls: LocalStorageService) { }

  ngOnInit(): void {

    let tokenAuth = this.ls.get('islogged');
    if(tokenAuth === null){
      this.router.navigate(['login']);
    }
    
    this.rs.getTasks().subscribe(response => {
      this.tasks = response;
    });
  }

  Search() {
    if(this.taskSearch === ""){
      this.ngOnInit();
    }
    else {
      this.tasks = this.tasks.filter(res => {
        return res.task.toLocaleLowerCase().match(this.taskSearch.toLocaleLowerCase());
      });
    }
  }

  deleteTask(val: any) {
    this.modalService.dismissAll();
    if(confirm("Are you sure?")){
      this.rs.deleteTask(val).subscribe(data => {

      });
      this.rs.getTasks().subscribe(response => {
        this.tasks = response
      });
    }
  }

  update(id: any) {
    this.modalService.dismissAll();
    this.router.navigate(['/update', id]);
  }

  logout() {
    this.userLogin = {
      "id": "1190",
      "username": "demo",
      "password": "demo",
      "token": ""
    }
    this.rs.updateUser(this.userLogin).subscribe(response => {});
    let tokenAuth = this.ls.remove('islogged');
    if(tokenAuth){
      this.router.navigate(['login']);
    }
  }

  create() {
    this.router.navigate(['create']);
  }


  open(content: any, taskView: any) {
    this.viewTask = taskView;
    console.log(content, this.viewTask);
    this.modalService.open(content);
  }

}
