import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BackComponent } from './components/back/back.component';
import { OnboardProjectComponent } from './pages/onboard-project/onboard-project.component';

import {CalendarModule} from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { DataDropdownPipe } from './pipes/data-dropdown.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AsideViewComponent } from './components/aside-view/aside-view.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TableViewComponent } from './components/table-view/table-view.component';
import { ImportDataComponent } from './pages/import-data/import-data.component';
import { UploadCsvComponent } from './pages/upload-csv/upload-csv.component';
import { FilterComponent } from './components/filter/filter.component';
import { DropdownModule } from 'primeng/dropdown';
import { SearchComponent } from './components/search/search.component';
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
import { ChartModule } from 'primeng/chart';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { TemplateAddComponent } from './pages/email/template-add/template-add.component';
import { SurveySettingComponent } from './pages/survey-setting/survey-setting.component';
import { DialogModule } from 'primeng/dialog';
import { GaugeComponent } from './components/gauge/gauge.component';

const PrimeNGmodule = [
  FileUploadModule,
  TabViewModule,
  TableModule,
  ScrollPanelModule,
  DropdownModule,
  CalendarModule,
  ChartModule,
  FullCalendarModule,
  CheckboxModule,
  EditorModule,
  DialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    LogoComponent,
    ClickOutsideDirective,
    DropdownComponent,
    BackComponent,
    OnboardProjectComponent,
    DataDropdownPipe,
    DashboardComponent,
    AsideViewComponent,
    DonutChartComponent,
    TableViewComponent,
    ImportDataComponent,
    UploadCsvComponent,
    FilterComponent,
    SearchComponent,
    UserDetailComponent,
    ApplicationDetailComponent,
    ComputerDetailComponent,
    UpdateMigrationComponent,
    ReadinessComponent,
    PlanningComponent,
    ReportComponent,
    SurveyComponent,
    EmailComponent,
    ServiceComponent,
    TemplateAddComponent,
    SurveySettingComponent,
    GaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PrimeNGmodule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
