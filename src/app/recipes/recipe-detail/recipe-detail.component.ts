import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {Input} from "@angular/core/src/metadata/directives";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
    selectedRecipe:Recipe;

  constructor(private recipeService : RecipeService, private sls : ShoppingListService) { }

  ngOnInit() {
    this.recipeService.selectedData.subscribe(
      data => this.selectedRecipe = data
    );
  }

  onAddToShoppingList(){
    this.sls.addItems(this.selectedRecipe.ingredients);
  }
}
