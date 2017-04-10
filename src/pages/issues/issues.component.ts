import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Issues } from '../../providers/issues';

@Component({
  selector: 'page-issues',
  templateUrl: 'issues.component.html',
})
export class IssuesPage {

  allIssues: any[]
  input = {data: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private issues: Issues) {
  }

  public searchIssues(input){
    this.issues.load(input)
      .subscribe(response => {
        console.log(response)
        this.allIssues = response
      }
  )}

}
