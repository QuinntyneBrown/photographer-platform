import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./gallery.actions";
import { pluck } from "../core/pluck";
import { Gallery } from "./gallery.model";

@Component({
    routes: ["/admin/gallerys","/admin/gallery/edit/:galleryId"],
    template: require("./gallerys-container.component.html"),
    styles: [require("./gallerys-container.component.css")],
    selector: "gallerys-container",
    viewProviders: ["$location","$routeParams","galleryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "galleryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, galleryActionCreator: actions.GalleryActionCreator) => {
    var galleryId = $route.current.params.galleryId;
    var promises = [invokeAsync(galleryActionCreator.all)];
    if (galleryId) { promises.push(invokeAsync({ action: galleryActionCreator.getById, params: { id: galleryId } })) };
    return $q.all(promises);
}])
export class GallerysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private galleryActionCreator: actions.GalleryActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.gallerys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentGalleryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/gallerys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentGalleryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/gallery/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveGalleryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["galleryId"]), items: this.entities }) as Gallery;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/gallerys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["galleryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["galleryId"]), items: this.entities }) as Gallery;
        } else {
            this.entity = new Gallery();
        }
    }

    edit = entity => this.galleryActionCreator.edit(entity);
    remove = entity => this.galleryActionCreator.remove(entity);
    create = entity => this.galleryActionCreator.create();
    addOrUpdate = options => this.galleryActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
