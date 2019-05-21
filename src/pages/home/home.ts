import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaginaUnoPage } from '../pagina-uno/pagina-uno';
import { MyListPage } from '../my-list/my-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  launchPaginaUnoPage(){
    this.navCtrl.push(PaginaUnoPage);
  }

  navigateToMyList(){
    this.navCtrl.push(MyListPage);
  }
}
