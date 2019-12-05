import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppNavigation } from './navigation';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getNavigationMenu(): Observable<Array<AppNavigation>> {
    return this.http.get<Array<AppNavigation>>(`/assets/navigation/menu.json`);
  }
}
