import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private domain: string | undefined;


  constructor(private http: HttpClient) {
    this.domain = environment.domain;
  }


  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.domain}/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  download(fileType: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.domain}/download/${fileType}/`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    });
  }

}
