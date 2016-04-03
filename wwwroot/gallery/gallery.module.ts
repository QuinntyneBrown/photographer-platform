require("../core/core.module");

import { GalleryEditorComponent } from "./gallery-editor.component";
import { GalleryListComponent } from "./gallery-list.component";
import { GalleryComponent } from "./gallery.component";
import { GallerysContainerComponent } from "./gallerys-container.component";
import { GalleryActionCreator } from "./gallery.actions";
import { GalleryService } from "./gallery.service";
import *  as reducers from "./gallery.reducers";

var app = (<any>angular.module("app.gallery", [
    "app.core"    
]));

app.service("galleryActionCreator",["$location","dispatcher","galleryService","guid",GalleryActionCreator]);
app.service("galleryService",["$q","apiEndpoint","fetch",GalleryService]);
app.component(GalleryEditorComponent);
app.component(GalleryListComponent);
app.component(GalleryComponent);
app.component(GallerysContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
