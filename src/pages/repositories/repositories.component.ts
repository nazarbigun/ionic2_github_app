import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Repositories } from '../../providers/repositories';

@Component({
  selector: 'page-repositories',
  templateUrl: 'repositories.component.html',
})
export class RepositoriesPage {

  allRepos: any[]
  input = {data: ''};
  errorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private repos: Repositories, public alertCtrl: AlertController) {
  }

  public searchRepos(input){
    this.repos.load(input)
      .subscribe(response => {
        console.log(response)
        this.allRepos = response
      },
      error => {this.errorMessage = <any>error
        this.showAlert(this.errorMessage)
      }
  )}

  showAlert(error) {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: error.errors[0].message,
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Repositories');
  }

}
