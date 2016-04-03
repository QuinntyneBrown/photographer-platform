import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { CustomerActionCreator } from "./customer.actions";

@Component({
    template: require("./customer.component.html"),
    styles: require("./customer.component.css"),
    selector: "customer",
    viewProviders: ["customerActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerComponent {
    constructor(private customerActionCreator: CustomerActionCreator) { }
  
}
