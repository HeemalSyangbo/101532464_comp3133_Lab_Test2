import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.spacexdata.com/v3/launches';

  getMissions(launchYear?: string): Observable<Mission[]> {
    if (launchYear) {
      return this.http.get<Mission[]>(`${this.baseUrl}?launch_year=${launchYear}`);
    }

    return this.http.get<Mission[]>(this.baseUrl);
  }

  getMissionByFlightNumber(flightNumber: number): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.baseUrl}?flight_number=${flightNumber}`);
  }
}
