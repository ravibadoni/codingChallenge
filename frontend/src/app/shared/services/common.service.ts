import { Injectable } from '@angular/core';
import {environment } from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import {enums} from "../serviceEnums";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  /**
   * get CRUD
   * @param path
   */
  get(path): Observable<any> {
    return this.http
      .get(environment.api_url+path)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * Post CRUD API
   * @param path
   * @param data
   */
  post(path,data,type){
   const body = this.setParams(data,type);
    return this.http
      .post(environment.api_url+path,body)
      .pipe(catchError(this.formatErrors));
  }

  setParams(data, type){
    if(type === enums.job){
      return new HttpParams()
        .set('title', data.title)
        .set('description', data.description);
    }
    if(type === enums.user){
      return new HttpParams()
        .set('name', data.name)
        .set('dateOfBirth', data.dateOfBirth)
        .set('email', data.email)
        .set('status', data.status)
        .set('hourlyRate', data.hourlyRate);
    }

  }
  /**
   * Delete CRUD API
   * @param path
   * @param data
   */
  delete(path){
    return this.http
      .delete(environment.api_url+path)
      .pipe(catchError(this.formatErrors));
  }

  /**
   * Logs error
   * @param error
   */
  private formatErrors(error: any) {
    return throwError(error);
  }
}
