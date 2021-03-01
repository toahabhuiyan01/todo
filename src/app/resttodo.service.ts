import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';
import { Tasks } from './tasks';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskFetch } from './resttodo/taskFetch';

@Injectable({
  providedIn: 'root'
})

export class ResttodoService {

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  }

  constructor(private http: HttpClient) { }

  urltask: string = "http://localhost:3000/Tasks";
  urluser: string = "http://localhost:3000/Users";

  getTasks(): Observable<Tasks[]> {
    return this.http.get<Tasks[]> (this.urltask);
  }

  deleteTask(id: number): Observable<Tasks> {
    const url = `${this.urltask}/${id}`;
    return this.http.delete<Tasks> (url, this.httpOptions);
  }

  getUpdateTask(id: number): Observable<Tasks> {
    const url = `${this.urltask}/${id}`;
    let task = this.http.get<Tasks> (url, this.httpOptions);
    console.log(task);
    return task;
  }

  updateTask(taskUpdate: TaskFetch): Observable<Tasks> {
    const url = `${this.urltask}/${taskUpdate.id}`;
    return this.http.put<Tasks> (url, taskUpdate, this.httpOptions).pipe(
      map(() => taskUpdate)
    );
  }

  createTask(taskUpdate: TaskFetch): Observable<Tasks> {
    const url = `${this.urltask}`;
    return this.http.post<Tasks>(url, taskUpdate, this.httpOptions).pipe();
  }

  getUser(): Observable<any> {
    const url = 'http://localhost:3000/Users/1190';
    return this.http.get(url);
  }

  updateUser(userUpdate: Users): Observable<Users> {
    const url = `${this.urluser}/${userUpdate.id}`;
    return this.http.put<Users>(url, userUpdate, this.httpOptions).pipe();    
  }

}
