import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OnboardProjectComponent } from './pages/onboard-project/onboard-project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImportDataComponent } from './pages/import-data/import-data.component';
import { UploadCsvComponent } from './pages/upload-csv/upload-csv.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'input-data', component: ImportDataComponent
  },
  {
    path: 'upload-csv', component: UploadCsvComponent
  },
  {
    path: 'onboard', component: OnboardProjectComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
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
