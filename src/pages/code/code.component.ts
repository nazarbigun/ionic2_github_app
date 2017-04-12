import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { Code } from '../../providers/code';

@Component({
  selector: 'page-code',
  templateUrl: 'code.component.html',
})
export class CodePage {

  allCode: any[]
  input = {data: ''};
  errorMessage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private code: Code, public alertCtrl: AlertController) {
  }

  public searchCode(input){
    this.code.load(input)
      .subscribe(response => {
        console.log(response)
        this.allCode = response
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
    console.log('ionViewDidLoad Code');
  }

}
