import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./customer-list.component.html"),
    styles: [require("./customer-list.component.css")],
    selector: "customer-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent {
    constructor() { }     
}
