import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./customer-gallery.actions";
import { pluck } from "../core/pluck";
import { CustomerGallery } from "./customer-gallery.model";

@Component({
    routes: ["/admin/customergallerys","/admin/customergallery/edit/:customerGalleryId"],
    template: require("./customer-gallerys-container.component.html"),
    styles: [require("./customer-gallerys-container.component.css")],
    selector: "customer-gallerys-container",
    viewProviders: ["$location","$routeParams","customerGalleryActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "customerGalleryActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, customerGalleryActionCreator: actions.CustomerGalleryActionCreator) => {
    var customerGalleryId = $route.current.params.customerGalleryId;
    var promises = [invokeAsync(customerGalleryActionCreator.all)];
    if (customerGalleryId) { promises.push(invokeAsync({ action: customerGalleryActionCreator.getById, params: { id: customerGalleryId } })) };
    return $q.all(promises);
}])
export class CustomerGallerysContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private customerGalleryActionCreator: actions.CustomerGalleryActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.customerGallerys;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerGalleryAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/customergallerys");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerGalleryAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/customergallery/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveCustomerGalleryAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["customerGalleryId"]), items: this.entities }) as CustomerGallery;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/customergallerys"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["customerGalleryId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["customerGalleryId"]), items: this.entities }) as CustomerGallery;
        } else {
            this.entity = new CustomerGallery();
        }
    }

    edit = entity => this.customerGalleryActionCreator.edit(entity);
    remove = entity => this.customerGalleryActionCreator.remove(entity);
    create = entity => this.customerGalleryActionCreator.create();
    addOrUpdate = options => this.customerGalleryActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
