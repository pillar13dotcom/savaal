import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SavaalBodyComponent } from './savaal-body/savaal-body.component';

const routes: Routes = [
  {
    path:'',
    component : SavaalBodyComponent
  },
  {
    path: 'events',
    loadChildren : 'app/event/event.module#EventModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
