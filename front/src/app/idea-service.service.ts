import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IdeaService {
  public API = '//localhost:8080/ideas';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/');
  }
  save(idea: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.API + '/create', idea);
    return result;
  }
}