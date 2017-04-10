import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';

@Injectable()
export class Users {

  url = 'https://api.github.com';

  constructor(public http: Http) { }

  load(input): Observable<User[]> {
    return this.http.get(`${this.url}/search/users?q=` + input['data'])
      .map(res => <User[]>res.json());
  }
}
