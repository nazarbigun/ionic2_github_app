import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Commits } from '../../providers/commits';

@Component({
  selector: 'page-commits',
  templateUrl: 'commits.component.html',
})
export class CommitsPage {

  allCommits: any[]
  input = {data: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private commits: Commits) {
  }

  public searchCommits(input){
    this.commits.load(input)
      .subscribe(response => {
        console.log(response)
        this.allCommits = response
      }
  )}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Commits');
  }

}
