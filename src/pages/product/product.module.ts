import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductEdit } from './product-edit/product-edit';
import { ProductList } from './product-list/product-list';
import { ProductListPopover } from './product-list/list-popover';

import { ProvidersModule } from '../../providers/providers.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ProductEdit,ProductList,ProductListPopover
  ],
  imports: [
    ProvidersModule,ComponentsModule,
    IonicPageModule.forChild(ProductEdit),
    IonicPageModule.forChild(ProductList),
    IonicPageModule.forChild(ProductListPopover),
  ],
  exports: [
    ProductEdit,ProductList,ProductListPopover
  ]
})
export class ProductModule {}
