import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CentralComponent } from './central/central.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
  {path:'', redirectTo:'/central', pathMatch:'full'},
  {path:'central', component:CentralComponent}, 
  {path: 'about', component:AboutComponent},
  {path: 'proyectos', component:ProyectosComponent},
  {path: 'contacto', component:ContactoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
