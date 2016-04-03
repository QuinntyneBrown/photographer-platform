import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class CustomerGalleryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, customerGalleryService, guid) {
        super($location,customerGalleryService,dispatcher,guid,AddOrUpdateCustomerGalleryAction,AllCustomerGallerysAction,RemoveCustomerGalleryAction,SetCurrentCustomerGalleryAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCustomerGallerySuccessAction(options.entity));

	currentCustomerGalleryRemoved = () => this.dispatcher.dispatch(new CurrentCustomerGalleryRemovedAction());
}


export class AddOrUpdateCustomerGalleryAction { constructor(public id, public entity) { } }

export class AllCustomerGallerysAction { constructor(public id, public entities) { } }

export class RemoveCustomerGalleryAction { constructor(public id, public entity) { } }

export class CustomerGallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentCustomerGalleryAction { constructor(public entity) { } }

export class AddOrUpdateCustomerGallerySuccessAction { constructor(public entity) { } }

export class CurrentCustomerGalleryRemovedAction { constructor() { } }
