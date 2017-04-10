import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Code } from '../../providers/code';

@Component({
  selector: 'page-code',
  templateUrl: 'code.component.html',
})
export class CodePage {

  allCode: any[]
  input = {data: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private code: Code) {
  }

  public searchCode(input){
    this.code.load(input)
      .subscribe(response => {
        console.log(response)
        this.allCode = response
      }
  )}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Code');
  }

}
