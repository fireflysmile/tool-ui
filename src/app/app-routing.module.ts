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
import { ReadinessComponent } from './pages/readiness/readiness.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { ReportComponent } from './pages/report/report.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { EmailComponent } from './pages/email/email.component';
import { ServiceComponent } from './pages/service/service.component';

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
    path: 'readiness', component: ReadinessComponent
  },
  {
    path: 'planning', component: PlanningComponent
  },
  {
    path: 'report', component: ReportComponent
  },
  {
    path: 'survey', component: SurveyComponent
  },
  {
    path: 'email', component: EmailComponent
  },
  {
    path: 'service', component: ServiceComponent
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
