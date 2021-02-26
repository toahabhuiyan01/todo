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

  constructor(public route: ActivatedRoute, public router: Router, public rs:ResttodoService) { }

  val: any;
  tasks: Tasks[] = [];
  taskUpdate: any;

  ngOnInit(): void {
    let sub = this.route.params.subscribe(params =>
      this.val = params['id']
    );

    if(this.val) {
      this.rs.getUpdateTask(this.val).subscribe(data => this.taskUpdate = data);
    }
    else {
      if(this.taskUpdate === undefined){
        this.taskUpdate = this.create();
      }
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
    this.rs.createTask(this.taskUpdate).subscribe(data => this.taskUpdate = data)
  }

}
