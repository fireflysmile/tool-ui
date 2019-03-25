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

const PrimeNGmodule = [
  FileUploadModule,
  TabViewModule,
  TableModule,
  ScrollPanelModule,
  DropdownModule
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
    FilterComponent
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
