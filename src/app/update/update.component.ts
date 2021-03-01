import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResttodoService } from '../resttodo.service';
import { TaskFetch } from '../resttodo/taskFetch';
import { Tasks } from '../tasks';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  userAuth: any;

  constructor(public route: ActivatedRoute, public router: Router, public rs:ResttodoService) { }

  val: any;
  tasks: Tasks[] = [];

  taskUpdate: any = {
    "id": null,
    "task": ""
  };
  update_task = false;

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params =>
      {
        this.val = params['id'];
        this.rs.getUser().subscribe(response => {
          this.userAuth = response;if(this.userAuth.token === ""){
            this.router.navigate(['login']);
            
          }});
      }
    );

    if(this.val) {
      this.update_task = !this.update_task;
      this.rs.getUpdateTask(this.val).subscribe(data => this.taskUpdate = data);
    }
    
  }

  update(){
    this.rs.updateTask(this.taskUpdate).subscribe(data =>this.taskUpdate = data);
    this.getTask();
    this.router.navigate(['task-list']);
  }

  getTask() {
    this.rs.getTasks().subscribe(response => this.taskUpdate = response);
  }

  create() {
    alert("creating task")
    this.rs.createTask(this.taskUpdate).subscribe(data => this.taskUpdate = data);
    this.getTask();
    this.router.navigate(['task-list']);
  }

}
