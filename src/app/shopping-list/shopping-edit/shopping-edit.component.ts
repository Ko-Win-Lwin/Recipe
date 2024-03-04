import { Component, ElementRef, EventEmitter, OnInit, Output, Input, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addItemEvent = new EventEmitter<Ingridient>();
  
  ingridient: Ingridient = new Ingridient;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(ingridient: Ingridient) {
    this.addItemEvent.emit(ingridient);
  }

  deleteItem(ingridient: Ingridient) {
    console.log(ingridient);
  }

  editItem(ingridient: Ingridient) {
    console.log(ingridient);
  }

}
