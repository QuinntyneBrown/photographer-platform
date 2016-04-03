import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./customer-gallery-list.component.html"),
    styles: [require("./customer-gallery-list.component.css")],
    selector: "customer-gallery-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerGalleryListComponent {
    constructor() { }     
}
