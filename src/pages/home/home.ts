import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
 name:string='shihai'
  constructor(public navCtrl: NavController) {

  
  }
 ngOnInit(name:string='to'){
   return name;
 }
}
