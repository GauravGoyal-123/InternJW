import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private url = ' ';
  constructor(private http : HttpClient) { }

  getMessage() {
    return ["message1", "message 2"];
  }

  getData() : Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }
}
