import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilesComponent } from './files/files.component';
import { StatusComponent } from './status/status.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
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
