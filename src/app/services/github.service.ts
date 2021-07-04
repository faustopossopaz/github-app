import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {


  constructor(private http: HttpClient) { }

  getCommitsList(): Observable<any>{
    const url = `https://api.github.com/repos/${environment.user}/${environment.repo}/commits`;
      return this.http.get<any>(url);    
  }
}
