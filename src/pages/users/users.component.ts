import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Users } from '../../providers/users';

import { User } from '../../models/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.component.html',
})
export class UsersPage {
  allUsers: User[]
  input = {data: ''};

  constructor(public navCtrl: NavController, private users: Users) {}

  public searchUsers(input){
    this.users.load(input)
      .subscribe(response =>
        this.allUsers = response
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Users');
  }

}
