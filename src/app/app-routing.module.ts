import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CentralComponent } from './central/central.component';

const routes: Routes = [
  {path:'', redirectTo:'/central', pathMatch:'full'},
  {path:'central', component:CentralComponent}, 
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
