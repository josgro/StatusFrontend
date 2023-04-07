import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { EmailCourse } from '../model/EmailCourse.model';
import { EmailStatus } from '../model/EmailStatus.model';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private domain: string | undefined;


  constructor(private http: HttpClient) {
    this.domain = environment.domain;
  }


  upload(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.domain}upload`, formData);
  }


  download(type: string): Observable<Blob> {
    return this.http.get(`${this.domain}download/${type}`, {
      responseType: 'blob'
    });
  }


  checkStatus(emailCourse: EmailCourse) {
    return this.http.post<EmailStatus>(`${this.domain}check`, emailCourse);
  }

}
