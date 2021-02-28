import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ResttodoComponent } from './resttodo/resttodo.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'task-list', component: ResttodoComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'create', component: UpdateComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
