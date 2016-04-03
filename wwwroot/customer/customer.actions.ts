import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class CustomerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, customerService, guid) {
        super($location,customerService,dispatcher,guid,AddOrUpdateCustomerAction,AllCustomersAction,RemoveCustomerAction,SetCurrentCustomerAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCustomerSuccessAction(options.entity));

	currentCustomerRemoved = () => this.dispatcher.dispatch(new CurrentCustomerRemovedAction());
}


export class AddOrUpdateCustomerAction { constructor(public id, public entity) { } }

export class AllCustomersAction { constructor(public id, public entities) { } }

export class RemoveCustomerAction { constructor(public id, public entity) { } }

export class CustomersFilterAction { constructor(public id, public term) { } }

export class SetCurrentCustomerAction { constructor(public entity) { } }

export class AddOrUpdateCustomerSuccessAction { constructor(public entity) { } }

export class CurrentCustomerRemovedAction { constructor() { } }
