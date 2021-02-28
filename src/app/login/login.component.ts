import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../users';
import { ResttodoService } from '../resttodo.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users: Users[] = [];
  userLogin: any;

  username: any;
  password: any;



  constructor(public rs: ResttodoService, private router: Router) { }

  ngOnInit(): void {
    this.rs.getUser().subscribe(response => {this.userLogin = response;if(this.userLogin.token === "loggedin"){this.router.navigate(['task-list']);}});
  }

  login(){
    if(this.username === this.userLogin.username && this.password === this.userLogin.password){
      console.log("successfull");
      this.userLogin.token = "loggedin";
      console.log(this.userLogin);
      this.rs.updateUser(this.userLogin).subscribe(response => {});
      this.router.navigate(['task-list']);
    }
  }

}
