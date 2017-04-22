import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {UserService} from "../../../providers/user"

@Component({
  selector: 'page-product-edit',
  templateUrl: 'product-edit.html',
})
export class ProductEdit {
  startTime:any
  object:any = {
    name:"",
    price:0,
    desc:"",
    prdimg:"",

  }
  currentMember:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public userServ:UserService,public viewCtrl:ViewController) {
    this.startTime = new Date()
    this.currentMember = this.navParams.data.product
    if(this.currentMember){
      console.log(this.currentMember)
      this.object.name = this.currentMember.name
      this.object.price = this.currentMember.price
      this.object.prdimg = this.currentMember.prdimg
      this.object.desc = this.currentMember.desc
      // this.object.exam1 = this.currentMember.exam1
      // this.object.exam2 = this.currentMember.exam2
      // this.object.exam3 = this.currentMember.exam3
    }
  }

save(){
  if(!this.object.name||!this.object.prdimg){
    console.log("您的信息不完整，请重新填写")
  }
this.object.price =Number(this.object.price);
  if(this.currentMember){
    this.userServ.updateClass("MST_PRD",this.currentMember.objectId,this.object).then(data=>{
      Object.keys(this.object).forEach(key=>{
        this.currentMember[key] = this.object[key]
      })
      this.viewCtrl.dismiss()
    }).catch(err=>{
    console.log(err)
  })
  }else{
  this.userServ.saveClass("MST_PRD",this.object).then(data=>{
    console.log(data)
    this.object.objectId = data.json().objectId
    this.object.createdAt = data.json().createAt
    this.viewCtrl.dismiss(this.object)
  }).catch(err=>{
    console.log(err)
    console.log("err")
  })
 }

}
returnToHistory(){
   this.viewCtrl.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberEdit');
  }
ngOnDestroy(){
  console.log("您访问该页面的时间：",this.startTime)
}

}
