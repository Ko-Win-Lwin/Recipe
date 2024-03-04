import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public param: string = 'recipe';

  route(param: string) {
    this.param = param;
  }
}
