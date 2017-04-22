import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailComponent {
  @Input() product:any
  @Output() getMemberData = new EventEmitter<any[]>();
  @Output() deleteMember = new EventEmitter<any[]>();
  constructor() {
  }
  chooseMember(){
    this.getMemberData.emit(this.product)
  }
  delete(){
    this.deleteMember.emit(this.product)
  }
}
