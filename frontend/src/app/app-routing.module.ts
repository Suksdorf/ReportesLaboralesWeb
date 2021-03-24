import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndiceComponent } from './indice';
import {ReportesComponent} from './reportes';


const routes: Routes = [
  {path: '', component:IndiceComponent},
  {path: 'reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
