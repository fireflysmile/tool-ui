import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

const PrimeNGmodule = [
  FileUploadModule,
  TabViewModule,
  TableModule
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
    DataDropdownPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrimeNGmodule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
