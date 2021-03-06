import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public clientId = 'newClient';
  public redirectUri = 'http://localhost:4200';

  constructor(private http: HttpClient) {

  }

  retrieveToken(code) {
    let params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', 'newClientSecret');
    params.append('redirect_uri', this.redirectUri);
    params.append('code', code);

    let headers =
      new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' });

    this.http.post('http://localhost:8073/auth/realms/task-buster/protocol/openid-connect/token',
      params.toString(), { headers: headers })
      .subscribe(
        data => this.saveToken(data),
        err => alert('Invalid Credentials'));

  }

  saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:4020';
  }

  getResource(resourceUrl): Observable<any> {
    var headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + Cookie.get('access_token')
    });
    return this.http.get(resourceUrl, { headers: headers });
  }

  checkCredentials() {
    return Cookie.check('access_token');
  }

  logout() {
    Cookie.delete('access_token');
    window.location.reload();
  }

}
