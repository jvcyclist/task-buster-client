import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  private userProfileUrl = environment.baseUrl + '/v1/home';

  constructor(private http: HttpClient) { }

  getCurrentUserName(): Observable<any> {
    return this.http.get(this.userProfileUrl);
  }
}
