import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module'

// Component Tags
import { EditRadio } from '../components/edit-radio/edit-radio'
import { EditTag } from '../components/edit-tag/edit-tag'
import { EditCheck } from '../components/edit-check/edit-check'
import { TextareaTinymce } from '../components/textarea/tinymce'
import { MemberDetailComponent } from '../components/member-detail/member-detail'
import { ProductDetailComponent } from '../components/product-detail/product-detail'

@NgModule({
  declarations: [
    // Component Tag
    EditRadio, EditTag, EditCheck, TextareaTinymce,MemberDetailComponent,ProductDetailComponent
    // Component Page
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    // Component Tag
     EditRadio, EditTag, EditCheck, TextareaTinymce,MemberDetailComponent,ProductDetailComponent
  ],
  entryComponents:[
   // Component Page
  ]
})
export class ComponentsModule { }