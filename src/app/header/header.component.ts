import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    constructor() {}

    @Output() routerEvent = new EventEmitter();
   
    route(param: string) {
        this.routerEvent.emit(param);
    }

}