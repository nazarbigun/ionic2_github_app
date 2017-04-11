import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Commits {

  url = 'https://api.github.com';

  constructor(public http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Accept', 'application/vnd.github.cloak-preview+json');
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  load(input): Observable<any[]> {
    return this.get(`${this.url}/search/commits?q=` + input['data'])
      .map(res => <any[]>res.json());
  }
}
