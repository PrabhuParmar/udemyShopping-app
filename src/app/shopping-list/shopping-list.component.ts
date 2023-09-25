import { Component } from '@angular/core';
import { ingredientData } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  // ingredient: ingredientData[] = [
  //   new ingredientData('apple', 5),
  //   new ingredientData('banana', 50),
  //   new ingredientData('ananas', 15)
  // ];
  productData: productDataInterface[] = [];
  id: number = 0;

  productDataAdded = (product: productDataInterface) => {
    this.id = this.productData.length + 1;
    this.productData.push({
      id: this.id,
      name: product.name,
      amount: product.amount
    });
  };

}

export interface productDataInterface {
  id?: number;
  name: string;
  amount: number;
}

