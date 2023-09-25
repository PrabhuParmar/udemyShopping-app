import { Component, Output, EventEmitter } from '@angular/core';
import { productDataInterface } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  name: string = '';
  amount: number = 0;
  @Output() createProductData = new EventEmitter<productDataInterface>();
  addProduct = () => {
    this.createProductData.emit({
      name: this.name,
      amount: this.amount
    });
    this.name = '';
    this.amount = 0;
  }

}
