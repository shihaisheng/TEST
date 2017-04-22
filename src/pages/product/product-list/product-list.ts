import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ProductEdit } from '../product-edit/product-edit'
import { ProductListPopover } from './list-popover';

import { UserService } from "../../../providers/user"

@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductList {
  products:Array<any>
  productEditPage:any = ProductEdit
  skills:Array<any>;
  startTime:any;
  currentProduct:any;


  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public actionCtrl:ActionSheetController,
  public popCtrl:PopoverController,
  public modalCtrl:ModalController,
  public alertCtrl:AlertController,
  private userServ:UserService) {
    this.userServ.findClasses("MST_PRD").then(data=>{
        if(data&&data.json().results){
          this.products = data.json().results
        }
    })
  }
  deleteMember(product){
    let opts = {
      title: '删除产品',
      message: `请问您要删除当前产品${product.name}吗?`,
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
            return
          }
        },
        {
          text: '确认',
          handler: () => {
                if(product&&product.objectId){
                  this.userServ.deleteClassById("MST_PRD",product.objectId).then(data=>{
                    this.products.filter((item,index)=>{
                      if(item.objectId == product.objectId){
                        this.products.splice(index,1)
                      }
                      })
                  })
                }
          }
        }
      ]
    }
    let deleteConfirm = this.alertCtrl.create(opts)
    deleteConfirm.present()
  }

  refreshData(refresher){
  this.userServ.findClasses("MST_PRD").then(data=>{
        if(data&&data.json().results){
          this.products = data.json().results
           refresher.complete();
        }
    })
  }


  setSkills(skills){
    console.log(skills)
    this.skills = skills
  }
  sortList(){
    let tempList = []
    this.products.forEach(product=>{


    })
    this.products = tempList
  }
    presentProductEditModal(product?){
      let opts:any = {}
      if(product){
        opts.product = product
      }
          let userAdd = this.modalCtrl.create(this.productEditPage,opts)
          userAdd.onDidDismiss(data=>{
            if(data){
              this.products.push(data)
            }
          })
          userAdd.present()
    }
  presentPopover(myEvent){
    let popover = this.popCtrl.create(ProductListPopover);
    popover.onDidDismiss(data=>{
      console.log(data)
      if(data){
        if(data == "product") {
          this.presentProductEditModal()
        }
        if(data == "top") {
          return
        }
      }
    })
    popover.present({
      ev: myEvent
    });
  }
  presentConfirm(){
    let opts = {
     title: '操作确认',
     buttons: [
       {
         text: '删除',
         role: 'destructive',
         handler: ()=>{
           console.log("Click 删除")
         }
       },
       {
         text: '新增',
         handler: () => {
           console.log('Archive clicked');
           this.navCtrl.push(this.productEditPage)
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
   }

    let actionsheet = this.actionCtrl.create(opts)
    actionsheet.present()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}
