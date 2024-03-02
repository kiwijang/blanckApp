import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { BASE_PATH } from '../variable';
import { Observable } from 'rxjs';
import { IAnnouncement } from './model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  private _basePath = `${environment.basePath}/room/all`;

  constructor(private httpClient: HttpClient) {}

  getAnnouncement(): Observable<IAnnouncement[]> {
    return this.httpClient.get<IAnnouncement[]>(this._basePath);
  }
}
