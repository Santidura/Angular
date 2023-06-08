import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeappComponent } from './homeapp/homeapp.component';

const routes: Routes = [
  { path:'',component:HomeappComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
