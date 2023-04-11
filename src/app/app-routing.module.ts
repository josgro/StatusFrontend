import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { NavComponent } from './nav/nav.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'status',
    component: StatusComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'files',
    component: FilesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'nav',
    component: NavComponent
  },
  {
    path: '',
    redirectTo: 'status',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
