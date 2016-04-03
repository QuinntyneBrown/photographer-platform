import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import { GalleryActionCreator } from "./gallery.actions";

@Component({
    template: require("./gallery.component.html"),
    styles: require("./gallery.component.css"),
    selector: "gallery",
    viewProviders: ["galleryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
    constructor(private galleryActionCreator: GalleryActionCreator) { }
  
}
