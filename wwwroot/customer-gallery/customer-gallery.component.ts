import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { CustomerGalleryActionCreator } from "./customer-gallery.actions";

@Component({
    template: require("./customer-gallery.component.html"),
    styles: require("./customer-gallery.component.css"),
    selector: "customer-gallery",
    viewProviders: ["customerGalleryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerGalleryComponent {
    constructor(private customerGalleryActionCreator: CustomerGalleryActionCreator) { }
  
}
