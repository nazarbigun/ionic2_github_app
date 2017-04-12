import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Commits } from '../../providers/commits';

@Component({
  selector: 'page-commits',
  templateUrl: 'commits.component.html',
})
export class CommitsPage {

  allCommits: any[]
  input = {data: ''};
  errorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private commits: Commits, public alertCtrl: AlertController) {
  }

  public searchCommits(input){
    this.commits.load(input)
      .subscribe(response => {
        console.log(response)
        this.allCommits = response
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
    console.log('ionViewDidLoad Commits');
  }

}
