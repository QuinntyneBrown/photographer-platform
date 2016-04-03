import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./customer-editor.component.html"),
    styles: [require("./customer-editor.component.css")],
    selector: "customer-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerEditorComponent {}


