import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./gallery-editor.component.html"),
    styles: [require("./gallery-editor.component.css")],
    selector: "gallery-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryEditorComponent {}


