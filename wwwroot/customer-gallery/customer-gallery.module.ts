require("../core/core.module");

import { CustomerGalleryEditorComponent } from "./customer-gallery-editor.component";
import { CustomerGalleryListComponent } from "./customer-gallery-list.component";
import { CustomerGalleryComponent } from "./customer-gallery.component";
import { CustomerGallerysContainerComponent } from "./customer-gallerys-container.component";
import { CustomerGalleryActionCreator } from "./customer-gallery.actions";
import { CustomerGalleryService } from "./customer-gallery.service";
import *  as reducers from "./customer-gallery.reducers";

var app = (<any>angular.module("app.customerGallery", [
    "app.core"    
]));

app.service("customerGalleryActionCreator",["$location","dispatcher","customerGalleryService","guid",CustomerGalleryActionCreator]);
app.service("customerGalleryService",["$q","apiEndpoint","fetch",CustomerGalleryService]);
app.component(CustomerGalleryEditorComponent);
app.component(CustomerGalleryListComponent);
app.component(CustomerGalleryComponent);
app.component(CustomerGallerysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
