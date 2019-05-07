import { Component, OnInit } from '@angular/core';
import { ShoppingCartServices } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartServices: ShoppingCartServices) { }

  ngOnInit() {
  }

  items(): any [] {
    return this.shoppingCartServices.items;
  }

  clear() {
    this.shoppingCartServices.clear()
  }

  removeItem(item: any) {
    this.shoppingCartServices.removeItem(item)
  }

  addItem(item: any) {
    this.shoppingCartServices.addItem(item)
  }

  total(): number {
    return this.shoppingCartServices.total()
  }

}
