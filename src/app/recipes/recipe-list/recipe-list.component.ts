import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeData = new EventEmitter<string>()
  recipes: Recipe[] = [
    new Recipe('recipe 1', 'a all type recipe availeble in recipe book store', '../../../assets/recipe.avif'),
    new Recipe('recipe 2',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem ipsa, aspernatur reiciendis nostrum beatae rerum laudantium iusto corporis repellendus itaque perferendis autem magni deserunt placeat, quam dolore sapiente labore?',
      '../../../assets/nature.jpg'),
    new Recipe('recipe 3', 'a all type recipe availeble in recipe book store', '../../../assets/laptop.jpg')
  ];

  selectedRecipeData = (recipe: any) => {
    this.recipeData.emit(recipe)
  }
}
