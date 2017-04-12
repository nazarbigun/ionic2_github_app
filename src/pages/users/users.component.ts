import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Users } from '../../providers/users';

import { User } from '../../models/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.component.html',
})
export class UsersPage {
  allUsers: User[]
  input = {data: ''};
  errorMessage: any;

  constructor(public navCtrl: NavController, private users: Users, public alertCtrl: AlertController) {}

  public searchUsers(input){
    this.users.load(input)
      .subscribe(response => {
        this.allUsers = response;
      }),
      error => {this.errorMessage = <any>error
        this.showAlert(this.errorMessage)
      }
  }

  showAlert(error) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: error.errors[0].message || "Nobody was found",
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Users');
  }

}
