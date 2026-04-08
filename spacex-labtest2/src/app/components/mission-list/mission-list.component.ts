import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MissionFilterComponent } from '../mission-filter/mission-filter.component';
import { Mission } from '../../models/mission';
import { SpacexApiService } from '../../services/spacex-api.service';
import { LaunchStatusPipe } from '../../pipes/launch-status.pipe';

@Component({
  selector: 'app-mission-list',
  imports: [
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MissionFilterComponent,
    LaunchStatusPipe
  ],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent implements OnInit {
  private readonly spacexApi = inject(SpacexApiService);

  readonly missions = signal<Mission[]>([]);
  readonly loading = signal(true);
  readonly selectedYear = signal('');

  readonly pageTitle = computed(() =>
    this.selectedYear() ? `SpaceX Missions (${this.selectedYear()})` : 'SpaceX Missions'
  );

  ngOnInit(): void {
    this.loadMissions();
  }

  onYearChanged(year: string): void {
    this.selectedYear.set(year);
    this.loadMissions(year);
  }

  private loadMissions(year?: string): void {
    this.loading.set(true);
    this.spacexApi.getMissions(year).subscribe({
      next: (missions) => {
        this.missions.set(missions);
        this.loading.set(false);
      },
      error: () => {
        this.missions.set([]);
        this.loading.set(false);
      }
    });
  }
}
