import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  title: string;
  body: string;

  constructor(public af: AngularFireDatabase) {
  }
  sendMessage(title: string, body: string) {
    this.af.list(`messages`).push({ title, body });
    this.title = "";
    this.body = "";
  }

}
