import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './views/summary/summary.component';
import { GenderSummaryComponent } from './views/gender-summary/gender-summary.component';
import { EthnicitySummaryComponent } from './views/ethnicity-summary/ethnicity-summary.component';
import { AgeSummaryComponent } from './views/age-summary/age-summary.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MediaLibraryComponent } from './views/media-library/media-library.component';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import * as echarts from 'echarts';
import {NgxEchartsModule } from 'ngx-echarts';
import { VideoInsightsComponent } from './views/video-insights/video-insights.component';
import {MatTreeModule} from '@angular/material/tree';
import { StartMenuComponent } from './start-menu/start-menu.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SettingsComponent } from './views/settings/settings.component';
import { StartMenuTempComponent } from './start-menu-temp/start-menu-temp.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatBadgeModule} from "@angular/material/badge";
import {PartnerClientsComponent} from "./views/partner-clients/partner-clients.component";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import { CategoryChartComponent } from './views/gender-summary/category-chart/category-chart.component';
import {  CustomChartComponent } from './views/gender-summary/custom-chart/custom-chart.component';
import { CategoryAgeComponent } from './views/age-summary/category-age/category-age.component';
import { CustomAgeComponent } from './views/age-summary/custom-age/custom-age.component';
import { CustomEthnicityComponent } from './views/etnicity/custom-ethnicity/custom-ethnicity.component';
import { CategoryEthnicityComponent } from './views/etnicity/category-ethnicity/category-ethnicity.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import {MatInputModule} from "@angular/material/input";
import { ForgottenPasswordComponent } from './home/forgotten-password/forgotten-password.component';
import { ForgottenPasswordDialogComponent } from './home/forgotten-password/forgotten-password-dialog/forgotten-password-dialog.component';
import { RegisterAccountComponent } from './home/register-account/register-account.component';
import { RegisterAccountDialogComponent } from './home/register-account/register-account-dialog/register-account-dialog.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {SharedModule} from "./@shared/shared.module";
import {AddEditClientComponent} from "./views/add-edit-client/add-edit-client.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummaryComponent,
    GenderSummaryComponent,
    EthnicitySummaryComponent,
    AgeSummaryComponent,
    MediaLibraryComponent,
    VideoInsightsComponent,
    StartMenuComponent,
    SettingsComponent,
    StartMenuTempComponent,
    PartnerClientsComponent,
    CategoryChartComponent,
    CustomChartComponent,
    CategoryAgeComponent,
    CustomAgeComponent,
    CustomEthnicityComponent,
    CategoryEthnicityComponent,
    AppMenuComponent,
    ForgottenPasswordComponent,
    ForgottenPasswordDialogComponent,
    RegisterAccountComponent,
    RegisterAccountDialogComponent,
    AddEditClientComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
    ReactiveFormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
