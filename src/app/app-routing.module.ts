import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SummaryComponent} from './views/summary/summary.component';
import {AgeSummaryComponent} from './views/age-summary/age-summary.component';
import {EthnicitySummaryComponent} from './views/ethnicity-summary/ethnicity-summary.component';
import {GenderSummaryComponent} from './views/gender-summary/gender-summary.component';
import {MediaLibraryComponent} from './views/media-library/media-library.component';
import {VideoInsightsComponent} from './views/video-insights/video-insights.component';
import {SettingsComponent} from './views/settings/settings.component';
import {StartMenuComponent } from './start-menu/start-menu.component';
import {StartMenuTempComponent } from './start-menu-temp/start-menu-temp.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'age-summary',
    component: AgeSummaryComponent,
    data:{ animation: 'isRight' }
  },
  {
    path: 'ethnicty-summary',
    component: EthnicitySummaryComponent,
    data:{ animation: 'isLeft' }
  },
  {
    path: 'gender-summary',
    component: GenderSummaryComponent
  },
  {
    path: 'media-library',
    component:MediaLibraryComponent
  },
  {
    path: 'video-insights',
    component:VideoInsightsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'start-menu',
    component: StartMenuComponent
  },
  {
    path: 'start-menu-temp',
    component: StartMenuTempComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
