import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { NavComponent } from './nav/nav.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { path: 'status', component: StatusComponent },
  { path: 'files', component: FilesComponent },
  { path: 'nav', component: NavComponent },
  { path: '', redirectTo: 'status', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
