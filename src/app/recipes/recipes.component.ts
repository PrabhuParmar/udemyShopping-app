import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipeData: string = ''
  emptyMessage: string = "Please select  Recipe"
  recipeDataAdded = (recipe: string) => {
    this.selectedRecipeData = recipe;
  }
}
