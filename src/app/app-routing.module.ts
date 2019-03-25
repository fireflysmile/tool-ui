import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { OnboardProjectComponent } from './pages/onboard-project/onboard-project.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ImportDataComponent } from './pages/import-data/import-data.component';
import { UploadCsvComponent } from './pages/upload-csv/upload-csv.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { ApplicationDetailComponent } from './pages/application-detail/application-detail.component';
import { ComputerDetailComponent } from './pages/computer-detail/computer-detail.component';
import { UpdateMigrationComponent } from './pages/computer-detail/update-migration/update-migration.component';

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
    path: 'user-detail', component: UserDetailComponent
  },
  {
    path: 'application-detail', component: ApplicationDetailComponent
  },
  {
    path: 'computer-detail', component: ComputerDetailComponent
  },
  {
    path: 'migration-update', component: UpdateMigrationComponent
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
