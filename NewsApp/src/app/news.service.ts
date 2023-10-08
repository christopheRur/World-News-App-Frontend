import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public retrieveNews(country:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiServiceUrl}/api/news`,country,{headers});

  }



}
