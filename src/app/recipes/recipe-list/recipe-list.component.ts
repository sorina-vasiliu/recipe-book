import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";
import {EventEmitter} from "@angular/common/src/facade/async";
import {Output} from "@angular/core/src/metadata/directives";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = []

  constructor(private recipeService: RecipeService){
  }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }

  onSelected(recipe:Recipe){
    this.recipeService.onSelectedData(recipe);
  }

}
