import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;
  @Output() selectedRecipe = new EventEmitter<string>()
  ngOnInit(): void {

  }
  selectRecipe = (recipesData: string) => {
    this.selectedRecipe.emit(recipesData)
  }



}
