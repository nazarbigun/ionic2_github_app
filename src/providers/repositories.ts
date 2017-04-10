import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class Repositories {

url = 'https://api.github.com';

constructor(public http: Http) { }

  load(input): Observable<any[]> {
    return this.http.get(`${this.url}/search/repositories?q=` + input['data'])
      .map(res => <any[]>res.json());
  }
}

