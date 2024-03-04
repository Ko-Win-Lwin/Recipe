import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() detailEvent = new EventEmitter<Recipe>();

  public recipes: Recipe[] = [
    {name: "Recipe One", detail: "This is test One", url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"},
    {name: "Recipe Two", detail: "This is test One", url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=300,272"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(recipe: Recipe) {
    this.detailEvent.emit(recipe);
  }

}
