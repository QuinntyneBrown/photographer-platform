import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./customer-gallery-editor.component.html"),
    styles: [require("./customer-gallery-editor.component.css")],
    selector: "customer-gallery-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerGalleryEditorComponent {}


