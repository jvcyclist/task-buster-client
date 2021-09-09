import { RegisterRequest } from './../shared/register-request.model';
import { catchError } from 'rxjs/operators';
import { User } from './../core/user/user.model';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = environment.baseUrl;
  private registerApiEndpoint = '/api/register/';

  constructor(private http: HttpClient) { }

  registerUser(registerRequest: RegisterRequest): Observable<any>{
    return this.http.post<any>(this.baseUrl + this.registerApiEndpoint, registerRequest, httpOptions);
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }



}
