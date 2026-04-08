import { Routes } from '@angular/router';
import { MissionDetailsComponent } from './components/mission-details/mission-details.component';
import { MissionListComponent } from './components/mission-list/mission-list.component';

export const routes: Routes = [
  { path: '', component: MissionListComponent },
  { path: 'mission/:flightNumber', component: MissionDetailsComponent },
  { path: '**', redirectTo: '' }
];
