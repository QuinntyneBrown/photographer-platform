require("../core/core.module");

import { CustomerEditorComponent } from "./customer-editor.component";
import { CustomerListComponent } from "./customer-list.component";
import { CustomerComponent } from "./customer.component";
import { CustomersContainerComponent } from "./customers-container.component";
import { CustomerActionCreator } from "./customer.actions";
import { CustomerService } from "./customer.service";
import *  as reducers from "./customer.reducers";

var app = (<any>angular.module("app.customer", [
    "app.core"    
]));

app.service("customerActionCreator",["$location","dispatcher","customerService","guid",CustomerActionCreator]);
app.service("customerService",["$q","apiEndpoint","fetch",CustomerService]);
app.component(CustomerEditorComponent);
app.component(CustomerListComponent);
app.component(CustomerComponent);
app.component(CustomersContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
