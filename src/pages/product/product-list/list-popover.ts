import {Component} from "@angular/core"
import {ViewController} from "ionic-angular"

@Component({
    template:`
    <ion-item (click)="choose('product')">
    添加产品
    </ion-item>
    <ion-item (click)="choose('top')">
    View产品
    </ion-item>
    `
})
export class ProductListPopover{
    constructor(public viewCtrl:ViewController){
    }
    choose(option=""){
        this.viewCtrl.dismiss(option)
    }
}