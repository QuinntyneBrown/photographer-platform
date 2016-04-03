import * as actions from "./customer-gallery.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeCustomerGalleryReducer = (state, action) => {
    if (action instanceof actions.RemoveCustomerGalleryAction)
        pluckOut({ items: state.customerGallerys, value: action.entity.id });
    return state;
}

export const addCustomerGalleryReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateCustomerGalleryAction) {
        addOrUpdate({ items: state.customerGallerys, item: action.entity });
    }
    return state;
}

export const allCustomerGallerysReducer = (state, action) => {
    if (action instanceof actions.AllCustomerGallerysAction) {
        state.customerGallerys = action.entities;
    }
    return state;
}

export const setCurrentCustomerGalleryReducer = (state, action) => {
    if (action instanceof actions.SetCurrentCustomerGalleryAction) {
        state.currentCustomerGalleryId = action.id;
    }
    return state;
}
