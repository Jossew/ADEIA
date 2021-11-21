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
import {RenamePropertiesPipe} from "./shared/pipes/rename-properties.pipe";
import {TruncatePipe} from "./shared/pipes/truncate.pipe";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule} from "@angular/forms";
import { CategoryChartComponent } from './views/gender-summary/category-chart/category-chart.component';
import { CustomChartComponent } from './views/gender-summary/custom-chart/custom-chart.component';

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
    RenamePropertiesPipe,
    TruncatePipe,
    CategoryChartComponent,
    CustomChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatTreeModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatTooltipModule,
    MatMenuModule,
    MatBadgeModule,
    MatTreeModule,
    MatDialogModule,
    // NgxEchartsModule,
    NgxEchartsModule.forRoot({
      echarts
    }),
  ],
  providers: [RenamePropertiesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
