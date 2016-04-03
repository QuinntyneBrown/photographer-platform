import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./customer.actions";
import { pluck } from "../core/pluck";
import { Customer } from "./customer.model";

@Component({
    routes: ["/admin/customers","/admin/customer/edit/:customerId"],
    template: require("./customers-container.component.html"),
    styles: [require("./customers-container.component.css")],
    selector: "customers-container",
    viewProviders: ["$location","$routeParams","customerActionCreator"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "customerActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, customerActionCreator: actions.CustomerActionCreator) => {
    var customerId = $route.current.params.customerId;
    var promises = [invokeAsync(customerActionCreator.all)];
    if (customerId) { promises.push(invokeAsync({ action: customerActionCreator.getById, params: { id: customerId } })) };
    return $q.all(promises);
}])
export class CustomersContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private customerActionCreator: actions.CustomerActionCreator) { }
    storeOnChange = state => {        
        this.entities = state.customers;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/customers");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/customer/edit/" + state.lastTriggeredByAction.entity.id);
        
        if (state.lastTriggeredByAction instanceof actions.RemoveCustomerAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["customerId"]), items: this.entities }) as Customer;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/customers"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["customerId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["customerId"]), items: this.entities }) as Customer;
        } else {
            this.entity = new Customer();
        }
    }

    edit = entity => this.customerActionCreator.edit(entity);
    remove = entity => this.customerActionCreator.remove(entity);
    create = entity => this.customerActionCreator.create();
    addOrUpdate = options => this.customerActionCreator.addOrUpdate({ data: options.data });

    entity;
    entities;
}
