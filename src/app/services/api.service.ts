import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  getRepos() {
    return this.http.get<any>(`https://api.github.com/users/375291601334/repos`);
  }

  getRepoFullInfo(repoId: string) {
    return this.http.get<any>(`https://api.github.com/repos/375291601334/${repoId}`);
  }

  getUser() {
    return this.http.get<any>(`https://api.github.com/users/375291601334`);
  }

}
