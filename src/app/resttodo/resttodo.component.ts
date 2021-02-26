import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../users';
import { Tasks } from '../tasks';
import { from } from 'rxjs';

@Component({
  selector: 'app-resttodo',
  templateUrl: './resttodo.component.html',
  styleUrls: ['./resttodo.component.css']
})
export class ResttodoComponent implements OnInit {

  users: Users[] = [];
  todos: Tasks[] = [];
  task : any;

  constructor() { }

  ngOnInit(): void {
  }

}
