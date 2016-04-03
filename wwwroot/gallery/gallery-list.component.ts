import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./gallery-list.component.html"),
    styles: [require("./gallery-list.component.css")],
    selector: "gallery-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryListComponent {
    constructor() { }     
}
