import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  public ingridients: Ingridient[] = [
    { name: "Potato", amount: 5 },
    { name: "Tomato", amount: 7}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
  }

}
