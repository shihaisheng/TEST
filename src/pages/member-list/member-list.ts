import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular'
import { MemberEdit } from '../member-edit/member-edit';


@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {
members:any;
memberEditPage:any=MemberEdit

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionCttrl:ActionSheetController) {
    this.members=[
      {id:1,name:"shihai1",phone:"13478993520",email:"shihai.sheng@avanade.com",sex:"male",avatar:"assets/img/avatar-ts-bullseye.png",isHere:true},
     {id:7,name:"shihai7",phone:"10086",email:"shihai.sheng@avanade.com",sex:"male",avatar:"assets/img/avatar-ts-rex.png",isHere:true},
     {id:9,name:"shihai9",phone:"10086",email:"shihai.sheng@avanade.com",sex:"male",avatar:"assets/img/avatar-ts-sarge.png",isHere:true},
     {id:11,name:"shiha11",phone:"10086",email:"shihai.sheng@avanade.com",sex:"male",avatar:"assets/img/avatar-ts-slinky.png",isHere:true},
      {id:8,name:"shihai8",phone:"10010",email:"shihai.sheng@avanade.com",sex:"male",avatar:"assets/img/avatar-ts-squeeze.png",isHere:true}
    ]
  }
 presentConfirm() {
   let actionSheet = this.actionCttrl.create({
     title: '排序操作',
     buttons: [
       {
         text: '顺序',
         role: 'destructive',
         handler: () => {
           this.members.sort(function (a, b) {
            return a.id - b.id;
          });
           console.log('顺序');
         }
       },
       {
         text: '倒序',
         handler: () => {
           this.members.sort(function (a, b) {
            return b.id - a.id;
          });
           console.log('倒序');
         }
       },
        {
         text: '乱序',
         handler: () => {
            this.members.sort(function (a, b) {

            return Math.round(Math.random());
          });
            
           console.log(Math.round(Math.random()));
         }
       },
       {
         text: '取消',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }
 viewMember(){
   this.navCtrl.push(this.memberEditPage)
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
