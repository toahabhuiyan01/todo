import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { Tasks } from '../tasks';
import { ResttodoService } from '../resttodo.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-resttodo',
  templateUrl: './resttodo.component.html',
  styleUrls: ['./resttodo.component.css']
})
export class ResttodoComponent implements OnInit {

  users: Users[] = [];
  tasks: Tasks[] = [];
  taskSearch : any;

  constructor(public rs: ResttodoService, private router: Router) { }

  ngOnInit(): void {
    this.rs.getTasks().subscribe(response => this.tasks = response);
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
    if(confirm("Are you sure?")){
      this.rs.deleteTask(val).subscribe(data => {

      });
      this.rs.getTasks().subscribe(response => {
        this.tasks = response
      });
    }
  }

  update(id: any) {
    this.router.navigate(['/update', id]);
  }

}
