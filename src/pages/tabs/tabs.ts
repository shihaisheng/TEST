import { Component } from '@angular/core';

import { MemberList } from '../member/member-list/member-list'
import { ProductList } from '../product/product-list/product-list'
import { UserPage } from '../user/user'

@Component({
  templateUrl: 'tabs.html'
}) 
export class TabsPage {
  tab3Root = ProductList;
  tab4Root = MemberList;
  tab5Root = UserPage;

  constructor() {

  }
}
