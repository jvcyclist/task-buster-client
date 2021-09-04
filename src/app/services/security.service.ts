import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type NewType = Observable<any>;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private authorizeEndpointGoogle = '/oauth2/authorization/google'
  private tokenEndpointGoogle = '/login/oauth2/code/google';

  private authorizeEndpointFacebook = '/oauth2/authorization/facebook'
  private tokenEndpointFacebook = '/login/oauth2/code/facebook';

  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';

  constructor(private http: HttpClient) { }

  login(name?) {
    if (name === 'facebook'){
      window.open(this.baseUrl + this.authorizeEndpointFacebook, '_self');
    }
    else if (name === 'google'){
      window.open(this.baseUrl + this.authorizeEndpointGoogle, '_self');
    }
    else{
      window.open(this.baseUrl + this.authorizeEndpointGoogle, '_self');
    }

  }

  updateToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  fetchToken(code, state, name?): NewType {
    if (name === 'facebook'){
      return this.http.get(this.baseUrl + this.tokenEndpointFacebook + '?code=' + code + '&state=' + state);
    }
    else {
      return this.http.get(this.baseUrl + this.tokenEndpointGoogle + '?code=' + code + '&state=' + state);
    }

  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null;
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + '/logout', this.getToken());
  }

}

