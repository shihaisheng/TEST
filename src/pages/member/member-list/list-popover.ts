import {Component} from "@angular/core"
import {ViewController} from "ionic-angular"

@Component({
    template:`
    <ion-item (click)="choose('user')">
    添加用户
    </ion-item>
    <ion-item (click)="choose('top')">
    成绩排行
    </ion-item>
    `
})
export class MemberListPopover{
    constructor(public viewCtrl:ViewController){
    }
    choose(option=""){
        this.viewCtrl.dismiss(option)
    }
}