import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {}

  private user = '375291601334';

  getRepos(): Observable<any> {
    return this.http.get<any>(`users/${this.user}/repos`);
  }

  getRepoFullInfo(repoId: string): Observable<any> {
    return this.http.get<any>(`repos/${this.user}/${repoId}`);
  }

  getUser(): Observable<any> {
    return this.http.get<any>(`users/${this.user}`);
  }
}
