import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResttodoComponent } from './resttodo/resttodo.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'task-list', component: ResttodoComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'create', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
