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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    BrowserAnimationsModule,
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
    NgxEchartsModule.forRoot({
      echarts
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
