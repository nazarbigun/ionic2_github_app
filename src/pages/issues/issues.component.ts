import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Issues } from '../../providers/issues';

@Component({
  selector: 'page-issues',
  templateUrl: 'issues.component.html',
})
export class IssuesPage {

  allIssues: any[]
  input = {data: ''};
  errorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private issues: Issues, public alertCtrl: AlertController) {
  }

  public searchIssues(input){
    this.issues.load(input)
      .subscribe(response => {
        console.log(response)
        this.allIssues = response
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

}
