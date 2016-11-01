import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";

@Injectable()
export class RecipeService {
  selectedData = new EventEmitter();

  private  recipes: Recipe[] = [
    new Recipe('Schnitzel','Very tasty','http://www.hoehenrainer.de/wp-content/uploads/Schnitzel-Wiener-Art.jpg',[
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad','Okayish', 'https://eddyskitchen.files.wordpress.com/2012/07/mango-raspberry-strawberry-summer-salad-with-candied-pecan-and-raspberry-vinaigrette-dressing.jpg',[])
  ]
  constructor() { }

  getRecipes(){
    return this.recipes;
  }

  onSelectedData(recipe:Recipe){
    this.selectedData.emit(recipe);
  }

}
