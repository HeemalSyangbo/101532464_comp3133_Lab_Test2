import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Mission } from '../../models/mission';
import { SpacexApiService } from '../../services/spacex-api.service';

@Component({
  selector: 'app-mission-details',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly spacexApi = inject(SpacexApiService);

  readonly mission = signal<Mission | null>(null);
  readonly loading = signal(true);

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('flightNumber'));
    if (!Number.isFinite(flightNumber)) {
      this.loading.set(false);
      return;
    }

    this.spacexApi.getMissionByFlightNumber(flightNumber).subscribe({
      next: (response) => {
        this.mission.set(response.length ? response[0] : null);
        this.loading.set(false);
      },
      error: () => {
        this.mission.set(null);
        this.loading.set(false);
      }
    });
  }
}
