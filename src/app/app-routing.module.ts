import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OnboardProjectComponent } from './pages/onboard-project/onboard-project.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'onboard-project', component: OnboardProjectComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
