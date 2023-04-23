import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private apiUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  sendDate(date: Date) {
    return this.http.post(this.apiUrl, { date });
  }
}
