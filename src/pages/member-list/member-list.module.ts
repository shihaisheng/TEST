import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemberList } from './member-list';

@NgModule({
  declarations: [
    MemberList,
  ],
  imports: [
    IonicPageModule.forChild(MemberList),
  ],
  exports: [
    MemberList
  ]
})
export class MemberListModule {}
