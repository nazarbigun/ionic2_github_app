import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Repositories } from '../../providers/repositories';

@Component({
  selector: 'page-repositories',
  templateUrl: 'repositories.component.html',
})
export class RepositoriesPage {

  allRepos: any[]
  input = {data: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private repos: Repositories) {
  }

  public searchRepos(input){
    this.repos.load(input)
      .subscribe(response => {
        console.log(response)
        this.allRepos = response
      }
  )}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Repositories');
  }

}
