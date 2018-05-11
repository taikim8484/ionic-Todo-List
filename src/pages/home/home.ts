import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.items = [
      { title : 'title 1', description : 'des 1' },
      { title : 'title 2', description : 'des 2' },
      { title : 'title 3', description : 'des 3' },
      { title : 'title 4', description : 'des 4' }
    ];
  }

  addItem(){

  }
  viewItem(){

  }

}
