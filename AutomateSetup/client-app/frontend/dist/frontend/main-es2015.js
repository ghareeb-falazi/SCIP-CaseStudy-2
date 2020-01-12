(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ title }}</h1>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dairy/dairy.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dairy/dairy.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>dairy works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"subtitle\"><h2>Choose the supply chain you want</h2></div>\n<div class=\"main\">\n  <button mat-button class=\"to-seafood\" (click)=\"toSeafood()\">Seafood</button>\n  <button mat-button class=\"to-dairy\" (click)=\"toDairy()\">Dairy</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seafood/seafood.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seafood/seafood.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{ title }}</h1>\n<h2>\n  Using this user interface, you can interact with the Seafood supply chain.\n  Check the <a href=\"https://github.com/ghareeb-falazi/SCIP-CaseStudy-2\">sample case study</a> for more detailes about what is involved.\n</h2>\n\n<mat-tab-group mat-stretch-tabs (selectedTabChange)=\"onTabClick($event)\">\n  <!-- FISH -->\n  <mat-tab label=\"Fisherman\">\n    <h2>\n      You can register a new captured fish by filling the form and clicking on\n      the <em>Register Fish</em> button.\n    </h2>\n    <div class=\"wrapper\">\n      <mat-card class=\"form-card\">\n        <mat-card-header>\n          <mat-card-title>Fill the form with all information about the captured fish</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"form-box\">\n          <form\n          [formGroup]=\"fishForm\"\n          (ngSubmit)=\"onRegisterFish(fishForm.value)\"\n        >\n          <mat-form-field>\n            <input matInput formControlName=\"fishId\" placeholder=\"Fish id..\" />\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              formControlName=\"location\"\n              placeholder=\"Location..\"\n            />\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              formControlName=\"fishermanName\"\n              placeholder=\"Fisherman name..\"\n            />\n          </mat-form-field>\n          <button class=\"button\" type=\"submit\">Register Fish</button>\n        </form>\n        <div class=\"result-box\">\n          <div *ngIf=\"performing\" class=\"lds-roller mt-4\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n          <div *ngIf=\"!performing\" class=\"mt-4\">\n            {{ result }}\n          </div>\n        </div>\n        </mat-card-content>\n      </mat-card>\n      <div class=\"query-box\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Registered Fishes</mat-card-title>\n            <mat-card-subtitle>\n              you can retrieve all registered fishes by clicking on the\n              <em>Query</em> button\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngIf=\"fishPerforming\" class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <table\n              *ngIf=\"!fishPerforming\"\n              mat-table\n              [dataSource]=\"fishes\"\n              class=\"mat-elevation-z8\"\n            >\n              <ng-container matColumnDef=\"fishId\">\n                <th mat-header-cell *matHeaderCellDef>Fish Id</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.fishId }}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"location\">\n                <th mat-header-cell *matHeaderCellDef>Location</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.location }}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"fishermanName\">\n                <th mat-header-cell *matHeaderCellDef>Fisherman Name</th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.fishermanName }}\n                </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"fishColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: fishColumns\"></tr>\n            </table>\n            <div *ngIf=\"fishError !== ''\" class=\"error-box\">\n              {{ fishError }}\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"button\" mat-button class=\"button clear-btn\" (click)=\"clearFishes()\">\n              Clear\n            </button>\n            <button type=\"button\" mat-button class=\"button query-btn\" (click)=\"getFishes()\">\n              Query\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n\n  <!-- SHIPMENT -->\n  <mat-tab label=\"Shipment Company\">\n    <h2>\n      You can register a new shipment of fishes by filling the form and clicking\n      on the <em>Register Shipment</em> button.\n    </h2>\n    <div class=\"wrapper\">\n      <mat-card class=\"form-card\">\n        <mat-card-header>\n          <mat-card-title>Fill the form with all information about the shipment</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"form-box\">\n          <form\n          [formGroup]=\"shipmentForm\"\n          (ngSubmit)=\"onRegisterShipment(shipmentForm.value)\"\n        >\n          <mat-form-field>\n            <mat-chip-list\n              #shipmentFishIds\n              formControlName=\"fishIds\"\n              aria-label=\"Ids selection\"\n            >\n              <mat-chip\n                *ngFor=\"let id of idsForShipment\"\n                [selectable]=\"selectable\"\n                [removable]=\"removable\"\n                (removed)=\"removeIdFromShipment(id)\"\n              >\n                {{ id }}\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n              </mat-chip>\n              <input\n                placeholder=\"Fish ids..\"\n                [matChipInputFor]=\"shipmentFishIds\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"addIdInShipment($event)\"\n              />\n            </mat-chip-list>\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              formControlName=\"toLocation\"\n              placeholder=\"To location..\"\n            />\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              formControlName=\"shipmentCompanyName\"\n              placeholder=\"Company name..\"\n            />\n          </mat-form-field>\n          <button class=\"button\" type=\"submit\">Register Shipment</button>\n        </form>\n        <div class=\"result-box\">\n          <div *ngIf=\"performing\" class=\"lds-roller mt-4\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n          <div *ngIf=\"!performing\" class=\"mt-4\">\n            {{ result }}\n          </div>\n        </div>\n        </mat-card-content>\n      </mat-card>\n      <div class=\"query-box\">\n        <!-- SHIPMENTS -->\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Registered Fish Shipments</mat-card-title>\n            <mat-card-subtitle>\n              you can retrieve all registered fish shipments by clicking on the\n              <em>Query</em> button\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngIf=\"shipmentPerforming\" class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <table\n              *ngIf=\"!shipmentPerforming\"\n              mat-table\n              [dataSource]=\"shipments\"\n              class=\"mat-elevation-z8\"\n            >\n              <ng-container matColumnDef=\"fishIds\">\n                <th mat-header-cell *matHeaderCellDef>Fish Ids</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.fishIds }}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"toLocation\">\n                <th mat-header-cell *matHeaderCellDef>To Location</th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.toLocation }}\n                </td>\n              </ng-container>\n              <ng-container matColumnDef=\"shipmentCompanyName\">\n                <th mat-header-cell *matHeaderCellDef>\n                  Shipment Company Name\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.shipmentCompanyName }}\n                </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"shipmentColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: shipmentColumns\"></tr>\n            </table>\n            <div *ngIf=\"shipmentError !== ''\" class=\"error-box\">\n              {{ shipmentError }}\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"button\" mat-button class=\"button clear-btn\" (click)=\"clearShipments()\">\n              Clear\n            </button>\n            <button type=\"button\" mat-button class=\"button query-btn\" (click)=\"getShipments()\">\n              Query\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n\n  <!-- PACKAGE -->\n  <mat-tab label=\"Processing Facility\">\n    <h2>\n      You can register a new fishes' package by filling the form and clicking on\n      the <em>Register Package</em> button.\n    </h2>\n    <div class=\"wrapper\">\n      <mat-card class=\"form-card\">\n        <mat-card-header>\n          <mat-card-title>Fill the form with all information about the shipment</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"form-box\">\n          <form\n          [formGroup]=\"packageForm\"\n          (ngSubmit)=\"onRegisterPackage(packageForm.value)\">\n            <mat-form-field>\n              <mat-chip-list\n                #packageFishIds\n                formControlName=\"fishIds\"\n                aria-label=\"Ids selection\"\n              >\n                <mat-chip\n                  *ngFor=\"let id of idsForPackage\"\n                  [selectable]=\"selectable\"\n                  [removable]=\"removable\"\n                  (removed)=\"removeIdFromPackage(id)\"\n                >\n                  {{ id }}\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n                <input\n                  placeholder=\"Fish ids..\"\n                  [matChipInputFor]=\"packageFishIds\"\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\n                  (matChipInputTokenEnd)=\"addIdInPackage($event)\"\n                />\n              </mat-chip-list>\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"packageId\"\n                placeholder=\"Package id..\"\n              />\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"processingFacilityName\"\n                placeholder=\"Facility name..\"\n              />\n            </mat-form-field>\n            <button class=\"button\" type=\"submit\">Register Package</button>\n          </form>\n          <div class=\"result-box\">\n            <div *ngIf=\"performing\" class=\"lds-roller mt-4\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <div *ngIf=\"!performing\" class=\"mt-4\">\n              {{ result }}\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n      <div class=\"query-box\">\n        <!-- PACKAGE -->\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Registered Packages</mat-card-title>\n            <mat-card-subtitle>\n              you can retrieve all registered packages by clicking on the\n              <em>Query</em> button\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngIf=\"packagePerforming\" class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <table\n              *ngIf=\"!packagePerforming\"\n              mat-table\n              [dataSource]=\"packages\"\n              class=\"mat-elevation-z8\"\n            >\n              <ng-container matColumnDef=\"fishIds\">\n                <th mat-header-cell *matHeaderCellDef>Fish Ids</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.fishIds }}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"packageId\">\n                <th mat-header-cell *matHeaderCellDef>Package Id</th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.packageId }}\n                </td>\n              </ng-container>\n              <ng-container matColumnDef=\"processingFacilityName\">\n                <th mat-header-cell *matHeaderCellDef>\n                  Processing Facility Name\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.processingFacilityName }}\n                </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"packageColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: packageColumns\"></tr>\n            </table>\n            <div *ngIf=\"packageError !== ''\" class=\"error-box\">\n              {{ packageError }}\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"button\" mat-button class=\"button clear-btn\" (click)=\"clearPackages()\">\n              Clear\n            </button>\n            <button type=\"button\" mat-button class=\"button query-btn\" (click)=\"getPackages()\">\n              Query\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>  \n    </div>\n  </mat-tab>\n\n  <!-- TRANSPORTATION -->\n  <mat-tab label=\"Distributor\">\n    <h2>\n      You can register a transportation by filling the form and clicking on the\n      <em>Register Transportation</em> button.\n    </h2>\n    <div class=\"wrapper\">\n      <mat-card class=\"form-card\">\n        <mat-card-header>\n          <mat-card-title>Fill the form with all information about the shipment</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"form-box\">\n          <form\n          [formGroup]=\"transportationForm\"\n          (ngSubmit)=\"onRegisterTransportation(transportationForm.value)\">\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"packageId\"\n                placeholder=\"Package id..\"\n              />\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"toLocation\"\n                placeholder=\"To location..\"\n              />\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"distributorName\"\n                placeholder=\"Distributor name..\"\n              />\n            </mat-form-field>\n            <button class=\"button\" type=\"submit\">Register Transportation</button>\n          </form>\n          <div class=\"result-box\">\n            <div *ngIf=\"performing\" class=\"lds-roller mt-4\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <div *ngIf=\"!performing\" class=\"mt-4\">\n              {{ result }}\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n      <div class=\"query-box\">\n        <!-- TRANSPORTATION -->\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Registered Package Transportations</mat-card-title>\n            <mat-card-subtitle>\n              you can retrieve all registered package transportation by clicking on the\n              <em>Query</em> button\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngIf=\"transportationPerforming\" class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <table\n              *ngIf=\"!transportationPerforming\"\n              mat-table\n              [dataSource]=\"transportations\"\n              class=\"mat-elevation-z8\"\n            >\n              <ng-container matColumnDef=\"packageId\">\n                <th mat-header-cell *matHeaderCellDef>Package Id</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.packageId }}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"toLocation\">\n                <th mat-header-cell *matHeaderCellDef>To Location</th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.toLocation }}\n                </td>\n              </ng-container>\n              <ng-container matColumnDef=\"distributorName\">\n                <th mat-header-cell *matHeaderCellDef>\n                  Distributor Name\n                </th>\n                <td mat-cell *matCellDef=\"let element\">\n                  {{ element.distributorName }}\n                </td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"transportationColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: transportationColumns\"></tr>\n            </table>\n            <div *ngIf=\"transportationError !== ''\" class=\"error-box\">\n              {{ transportationError }}\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"button\" mat-button class=\"button clear-btn\" (click)=\"clearTransportations()\">\n              Clear\n            </button>\n            <button type=\"button\" mat-button class=\"button query-btn\" (click)=\"getTransportations()\">\n              Query\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n\n  <!-- INVENTORY -->\n  <mat-tab label=\"Inventory\">\n    <h2>\n      You can register a new inventory entry by filling the form and clicking on\n      the\n      <em>Register Entry</em> button.\n    </h2>\n    <div class=\"wrapper\">\n      <mat-card class=\"form-card\">\n        <mat-card-header>\n          <mat-card-title>Fill the form with all information about the shipment</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"form-box\">\n          <form\n          [formGroup]=\"inventoryEntryForm\"\n          (ngSubmit)=\"onRegisterInInventory(inventoryEntryForm.value)\"\n        >\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"packageId\"\n                placeholder=\"Package id..\"\n              />\n            </mat-form-field>\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"retailerName\"\n                placeholder=\"Retailer name..\"\n              />\n            </mat-form-field>\n            <button class=\"button\" type=\"submit\">Register Entry</button>\n          </form>\n          <div class=\"result-box\">\n            <div *ngIf=\"performing\" class=\"lds-roller mt-4\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <div *ngIf=\"!performing\" class=\"mt-4\">\n              {{ result }}\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n      <div class=\"query-box\">\n        <!-- INVENTORY -->\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Packages In Inventory </mat-card-title>\n            <mat-card-subtitle>\n              you can retrieve all packages registered in inventory by clicking on the\n              <em>Query</em> button\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngIf=\"entryPerforming\" class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <table\n              *ngIf=\"!entryPerforming\"\n              mat-table\n              [dataSource]=\"entries\"\n              class=\"mat-elevation-z8\"\n            >\n              <ng-container matColumnDef=\"packageId\">\n                <th mat-header-cell *matHeaderCellDef>Package Id</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.packageId }}</td>\n              </ng-container>\n              <ng-container matColumnDef=\"retailerName\">\n                <th mat-header-cell *matHeaderCellDef>Retailer Name</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.retailerName }}</td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"entryColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: entryColumns\"></tr>\n            </table>\n            <div *ngIf=\"entryError !== ''\" class=\"error-box\">\n              {{ entryError }}\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"button\" mat-button class=\"button clear-btn\" (click)=\"clearEntries()\">\n              Clear\n            </button>\n            <button type=\"button\" mat-button class=\"button query-btn\" (click)=\"getEntries()\">\n              Query\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n\n  <!-- SALES -->\n  <mat-tab label=\"Retailer\">\n    <h2>\n      You can register a new fishes' package sale by filling the form and\n      clicking on the\n      <em>Register Sale</em> button.\n    </h2>\n    <div class=\"wrapper\">\n      <mat-card class=\"form-card\">\n        <mat-card-header>\n          <mat-card-title>Fill the form with all information about the shipment</mat-card-title>\n        </mat-card-header>\n        <mat-card-content class=\"form-box\">\n          <form\n          [formGroup]=\"sellingForm\"\n          (ngSubmit)=\"onRegisterSelling(sellingForm.value)\"\n        >\n            <mat-form-field>\n              <input\n                matInput\n                formControlName=\"packageId\"\n                placeholder=\"Package id..\"\n              />\n            </mat-form-field>\n            <button class=\"button\" type=\"submit\">Register Sale</button>\n          </form>\n          <div class=\"result-box\">\n            <div *ngIf=\"performing\" class=\"lds-roller mt-4\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <div *ngIf=\"!performing\" class=\"mt-4\">\n              {{ result }}\n            </div>\n          </div>\n        </mat-card-content>\n      </mat-card>\n      <div class=\"query-box\">\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>Sold Packages</mat-card-title>\n            <mat-card-subtitle>\n              you can retrieve all sold packages by clicking on the\n              <em>Query</em> button\n            </mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <div *ngIf=\"salePerforming\" class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n            <table\n              *ngIf=\"!salePerforming\"\n              mat-table\n              [dataSource]=\"sales\"\n              class=\"mat-elevation-z8\"\n            >\n              <ng-container matColumnDef=\"packageId\">\n                <th mat-header-cell *matHeaderCellDef>Package Id</th>\n                <td mat-cell *matCellDef=\"let element\">{{ element.packageId }}</td>\n              </ng-container>\n              <tr mat-header-row *matHeaderRowDef=\"saleColumns\"></tr>\n              <tr mat-row *matRowDef=\"let row; columns: saleColumns\"></tr>\n            </table>\n            <div *ngIf=\"saleError !== ''\" class=\"error-box\">\n              {{ saleError }}\n            </div>\n          </mat-card-content>\n          <mat-card-actions>\n            <button type=\"button\" mat-button class=\"button clear-btn\" (click)=\"clearSales()\">\n              Clear\n            </button>\n            <button type=\"button\" mat-button class=\"button query-btn\" (click)=\"getSales()\">\n              Query\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </mat-tab>\n\n  <!-- PROVENANCE -->\n  <mat-tab label=\"Provenance\">\n    <h2>\n      You can retrieve the whole provenance of a package by providing its id and clicking on\n      the <em>Retrieve Provenance</em> button.\n    </h2>\n    <div class=\"prov-wrapper\">\n      <div class=\"prov-form-box mat-elevation-z3\">\n        <form\n          [formGroup]=\"provenanceForm\"\n          (ngSubmit)=\"retrieveProvenance(provenanceForm.value)\"\n        >\n          <mat-form-field>\n            <input\n              matInput\n              formControlName=\"packageId\"\n              placeholder=\"Package Id..\"\n            />\n          </mat-form-field>\n          <button mat-button class=\"submit-btn button\" type=\"submit\">Retrieve Provenance</button>\n          <button mat-button class=\"clear-btn button\" type=\"button\" (click)=\"clearProvenance()\">Clear</button>\n        </form>\n      </div>\n      <div class=\"prov-result-box\">\n        <div class=\"spinner\">\n          <div *ngIf=\"performing\" class=\"lds-roller\">\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n        </div>\n        <div *ngIf=\"!performing && error !== ''\" class=\"error-box\">\n          <h3>{{ error }}</h3>\n        </div>\n        <div *ngIf=\"!performing && error === ''\" class=\"prov-tables-box\">\n          <h3> Selling Occurence </h3>\n          <table\n            mat-table\n            [dataSource]=\"salesProv\"\n            class=\"mat-elevation-z8\"\n          >\n            <ng-container matColumnDef=\"isoTimestamp\">\n              <th mat-header-cell *matHeaderCellDef>ISO Timestamp</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.isoTimestamp }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"packageId\">\n              <th mat-header-cell *matHeaderCellDef>Package Id</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.packageId }}</td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"saleProvColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: saleProvColumns\"></tr>\n          </table>\n          <h3> Inventory Occurence </h3>\n          <table\n            mat-table\n            [dataSource]=\"entriesProv\"\n            class=\"mat-elevation-z8\"\n          >\n            <ng-container matColumnDef=\"isoTimestamp\">\n              <th mat-header-cell *matHeaderCellDef>ISO Timestamp</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.isoTimestamp }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"packageId\">\n              <th mat-header-cell *matHeaderCellDef>Package Id</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.packageId }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"retailerName\">\n              <th mat-header-cell *matHeaderCellDef>Retailer Name</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.retailerName }}</td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"entryProvColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: entryProvColumns\"></tr>\n          </table>\n          <h3> Transportation Occurence </h3>\n          <table\n            mat-table\n            [dataSource]=\"transportationsProv\"\n            class=\"mat-elevation-z8\"\n          >\n            <ng-container matColumnDef=\"isoTimestamp\">\n              <th mat-header-cell *matHeaderCellDef>ISO Timestamp</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.isoTimestamp }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"packageId\">\n              <th mat-header-cell *matHeaderCellDef>Package Id</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.packageId }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"toLocation\">\n              <th mat-header-cell *matHeaderCellDef>To Location</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.toLocation }}\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"distributorName\">\n              <th mat-header-cell *matHeaderCellDef>\n                Distributor Name\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.distributorName }}\n              </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"transportationProvColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: transportationProvColumns\"></tr>\n          </table>\n          <h3> Packaging Occurence </h3>\n          <table\n            mat-table\n            [dataSource]=\"packagesProv\"\n            class=\"mat-elevation-z8\"\n          >\n            <ng-container matColumnDef=\"isoTimestamp\">\n              <th mat-header-cell *matHeaderCellDef>ISO Timestamp</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.isoTimestamp }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"fishIds\">\n              <th mat-header-cell *matHeaderCellDef>Fish Ids</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.fishIds }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"packageId\">\n              <th mat-header-cell *matHeaderCellDef>Package Id</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.packageId }}\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"processingFacilityName\">\n              <th mat-header-cell *matHeaderCellDef>\n                Processing Facility Name\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.processingFacilityName }}\n              </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"packageProvColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: packageProvColumns\"></tr>\n          </table>\n          <h3> Fish Shipment Occurence </h3>\n          <table\n            mat-table\n            [dataSource]=\"shipmentsProv\"\n            class=\"mat-elevation-z8\"\n          >\n            <ng-container matColumnDef=\"isoTimestamp\">\n              <th mat-header-cell *matHeaderCellDef>ISO Timestamp</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.isoTimestamp }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"fishIds\">\n              <th mat-header-cell *matHeaderCellDef>Fish Ids</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.fishIds }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"toLocation\">\n              <th mat-header-cell *matHeaderCellDef>To Location</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.toLocation }}\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"shipmentCompanyName\">\n              <th mat-header-cell *matHeaderCellDef>\n                Shipment Company Name\n              </th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.shipmentCompanyName }}\n              </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"shipmentProvColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: shipmentProvColumns\"></tr>\n          </table>\n          <h3> Fish Catching Occurences </h3>\n          <table\n            mat-table\n            [dataSource]=\"fishesProv\"\n            class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"isoTimestamp\">\n              <th mat-header-cell *matHeaderCellDef>ISO Timestamp</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.isoTimestamp }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"fishId\">\n              <th mat-header-cell *matHeaderCellDef>Fish Id</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.fishId }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"location\">\n              <th mat-header-cell *matHeaderCellDef>Location</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.occurrence.location }}</td>\n            </ng-container>\n            <ng-container matColumnDef=\"fishermanName\">\n              <th mat-header-cell *matHeaderCellDef>Fisherman Name</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.occurrence.fishermanName }}\n              </td>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"fishProvColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: fishProvColumns\"></tr>\n          </table>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    /********************************** FISH **********************************/
    registerCapturedFish(fish) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/fish`;
        return this.http.post(url, fish, { responseType: 'text' });
    }
    getAllRegisteredFishes() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/fish`;
        return this.http.get(url);
    }
    /******************************** SHIPMENT ********************************/
    registerShipment(fishShipment) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/shipment`;
        return this.http.post(url, fishShipment, { responseType: 'text' });
    }
    getAllRegisteredShipments() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/shipment`;
        return this.http.get(url);
    }
    /******************************* PACKAGING ********************************/
    registerPackage(fishPackage) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/package`;
        return this.http.post(url, fishPackage, { responseType: 'text' });
    }
    getAllRegisteredPackages() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/package`;
        return this.http.get(url);
    }
    /***************************** TRANSPORTATION *****************************/
    registerTransportation(packageTransportation) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/transportation`;
        return this.http.post(url, packageTransportation, { responseType: 'text' });
    }
    getAllRegisteredTransportations() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/transportation`;
        return this.http.get(url);
    }
    /******************************* INVENTORY ********************************/
    registerInInventory(inventoryEntry) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/inventory`;
        return this.http.post(url, inventoryEntry, { responseType: 'text' });
    }
    getAllPackagesRegisteredInInventories() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/inventory`;
        return this.http.get(url);
    }
    /******************************** SELLING *********************************/
    registerSelling(packageSelling) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/selling`;
        return this.http.post(url, packageSelling, { responseType: 'text' });
    }
    getAllSoldPackages() {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/selling`;
        return this.http.get(url);
    }
    /******************************* PROVENANCE *******************************/
    retrieveProvenance(packageId) {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/seafood/provenance?packageId=${packageId}`;
        return this.http.get(url);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_seafood_seafood_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/seafood/seafood.component */ "./src/app/pages/seafood/seafood.component.ts");
/* harmony import */ var _pages_dairy_dairy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dairy/dairy.component */ "./src/app/pages/dairy/dairy.component.ts");






const routes = [
    { path: '', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"] },
    { path: 'seafood', component: _pages_seafood_seafood_component__WEBPACK_IMPORTED_MODULE_4__["SeafoodComponent"] },
    { path: 'dairy', component: _pages_dairy_dairy_component__WEBPACK_IMPORTED_MODULE_5__["DairyComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  margin-top: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Smart Contract Invocation Protocol (SCIP) Case Study';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_seafood_seafood_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/seafood/seafood.component */ "./src/app/pages/seafood/seafood.component.ts");
/* harmony import */ var _pages_dairy_dairy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/dairy/dairy.component */ "./src/app/pages/dairy/dairy.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_seafood_seafood_component__WEBPACK_IMPORTED_MODULE_10__["SeafoodComponent"],
            _pages_dairy_dairy_component__WEBPACK_IMPORTED_MODULE_11__["DairyComponent"],
            _pages_index_index_component__WEBPACK_IMPORTED_MODULE_12__["IndexComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ],
        providers: [_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");







let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/pages/dairy/dairy.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/dairy/dairy.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhaXJ5L2RhaXJ5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dairy/dairy.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/dairy/dairy.component.ts ***!
  \************************************************/
/*! exports provided: DairyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DairyComponent", function() { return DairyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DairyComponent = class DairyComponent {
    constructor() { }
    ngOnInit() {
    }
};
DairyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dairy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dairy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dairy/dairy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dairy.component.css */ "./src/app/pages/dairy/dairy.component.css")).default]
    })
], DairyComponent);



/***/ }),

/***/ "./src/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/index/index.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".subtitle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.main button {\n  margin: 20px;\n  width: 20%;\n  height: 180px;\n}\n\n.main .to-seafood {\n  background-color: rgb(45, 198, 209);\n}\n\n.main .to-dairy {\n  background-color: rgb(255, 228, 196);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWFpbiBidXR0b24ge1xuICBtYXJnaW46IDIwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMTgwcHg7XG59XG5cbi5tYWluIC50by1zZWFmb29kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ1LCAxOTgsIDIwOSk7XG59XG5cbi5tYWluIC50by1kYWlyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIyOCwgMTk2KTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let IndexComponent = class IndexComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    toSeafood() {
        this.router.navigate(['/seafood']);
    }
    toDairy() {
        this.router.navigate(['/dairy']);
    }
};
IndexComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/index/index.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./index.component.css */ "./src/app/pages/index/index.component.css")).default]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/pages/seafood/seafood.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/seafood/seafood.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 30px;\n}\n\nform {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.form-card {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 45%;\n  padding: 10px;\n  background-color: rgb(206, 204, 204);\n}\n\n.form-card .form-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n.result-box {\n  margin-top: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.query-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 55%;\n}\n\nmat-card-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nmat-card-content table {\n  width: 100%;\n}\n\nmat-card-content .error-box {\n  text-align: center;\n  margin-top: 15px;\n  color: rgb(192, 4, 4);\n}\n\nmat-card {\n  background-color: rgb(206, 204, 204);\n  margin: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\nmat-card mat-card-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nmat-card mat-card-actions button {\n  width: 50%;\n}\n\nmat-card mat-card-actions .clear-btn {\n  background-color: rgb(235, 139, 139);\n}\n\nmat-card mat-card-actions .query-btn {\n  background-color: rgb(174, 219, 144);\n  width: 50%;\n}\n\n.prov-wrapper {\n  margin-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n}\n\n.prov-form-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  width: 70%;\n  padding: 10px;\n  margin: 15px;\n  background-color: rgb(206, 204, 204);\n}\n\n.prov-form-box form > .submit-btn {\n  background-color: rgb(231, 225, 225);\n  margin: 10px 10px 4px 10px;\n}\n\n.prov-form-box form > .clear-btn {\n  background-color: rgb(235, 139, 139);\n  margin: 4px 10px 10px 10px;\n}\n\n.prov-result-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n  width: 100%;\n}\n\n.prov-result-box .spinner {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 40px;\n}\n\n.prov-result-box .error-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.prov-result-box .error-box h3 {\n  color: rgb(192, 4, 4);\n}\n\n.prov-result-box .prov-tables-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch;\n}\n\n.prov-result-box .prov-tables-box table {\n  width: 100%;\n  margin: 10px;\n}\n\n/* SPINNER */\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  -webkit-transform-origin: 40px 40px;\n          transform-origin: 40px 40px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: black;\n  margin: -4px 0 0 -4px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhZm9vZC9zZWFmb29kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQW9CO1VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMEJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwwQkFBb0I7VUFBcEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxZQUFZOztBQUVaO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0Usd0VBQWdFO1VBQWhFLGdFQUFnRTtFQUNoRSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsK0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFDQTtFQUNFLGdDQUF3QjtVQUF4Qix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhZm9vZC9zZWFmb29kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA0LCAyMDQpO1xufVxuXG4uZm9ybS1jYXJkIC5mb3JtLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4ucmVzdWx0LWJveCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXVlcnktYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDU1JTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWNhcmQtY29udGVudCAuZXJyb3ItYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogcmdiKDE5MiwgNCwgNCk7XG59XG5cbm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA0LCAyMDQpO1xuICBtYXJnaW46IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1jYXJkIG1hdC1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtY2FyZCBtYXQtY2FyZC1hY3Rpb25zIGJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbm1hdC1jYXJkIG1hdC1jYXJkLWFjdGlvbnMgLmNsZWFyLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDEzOSwgMTM5KTtcbn1cblxubWF0LWNhcmQgbWF0LWNhcmQtYWN0aW9ucyAucXVlcnktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NCwgMjE5LCAxNDQpO1xuICB3aWR0aDogNTAlO1xufVxuXG4ucHJvdi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm92LWZvcm0tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHdpZHRoOiA3MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNiwgMjA0LCAyMDQpO1xufVxuXG4ucHJvdi1mb3JtLWJveCBmb3JtID4gLnN1Ym1pdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMjUsIDIyNSk7XG4gIG1hcmdpbjogMTBweCAxMHB4IDRweCAxMHB4O1xufVxuXG4ucHJvdi1mb3JtLWJveCBmb3JtID4gLmNsZWFyLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDEzOSwgMTM5KTtcbiAgbWFyZ2luOiA0cHggMTBweCAxMHB4IDEwcHg7XG59XG5cbi5wcm92LXJlc3VsdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm92LXJlc3VsdC1ib3ggLnNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDQwcHg7XG59XG5cbi5wcm92LXJlc3VsdC1ib3ggLmVycm9yLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm92LXJlc3VsdC1ib3ggLmVycm9yLWJveCBoMyB7XG4gIGNvbG9yOiByZ2IoMTkyLCA0LCA0KTtcbn1cblxuLnByb3YtcmVzdWx0LWJveCAucHJvdi10YWJsZXMtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5wcm92LXJlc3VsdC1ib3ggLnByb3YtdGFibGVzLWJveCB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi8qIFNQSU5ORVIgKi9cblxuLmxkcy1yb2xsZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sZHMtcm9sbGVyIGRpdiB7XG4gIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDQwcHggNDBweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgbWFyZ2luOiAtNHB4IDAgMCAtNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDYzcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogNTZweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiA0OHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDQwcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgdG9wOiA3MXB4O1xuICBsZWZ0OiAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDI0cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogMTdweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgdG9wOiA1NnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/seafood/seafood.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/seafood/seafood.component.ts ***!
  \****************************************************/
/*! exports provided: SeafoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeafoodComponent", function() { return SeafoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm2015/keycodes.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");





let SeafoodComponent = class SeafoodComponent {
    constructor(apiService, formBuilder) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.title = 'Seafood Supply Chain';
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.idsForPackage = [];
        this.idsForShipment = [];
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.performing = false;
        this.result = null;
        this.prevIndex = 0;
        this.fishes = [];
        this.fishColumns = ['fishId', 'location', 'fishermanName'];
        this.fishPerforming = false;
        this.fishError = '';
        this.packages = [];
        this.packageColumns = ['fishIds', 'packageId', 'processingFacilityName'];
        this.packagePerforming = false;
        this.packageError = '';
        this.shipments = [];
        this.shipmentColumns = ['fishIds', 'toLocation', 'shipmentCompanyName'];
        this.shipmentPerforming = false;
        this.shipmentError = '';
        this.transportations = [];
        this.transportationColumns = ['packageId', 'toLocation', 'distributorName'];
        this.transportationPerforming = false;
        this.transportationError = '';
        this.sales = [];
        this.saleColumns = ['packageId'];
        this.salePerforming = false;
        this.saleError = '';
        this.entries = [];
        this.entryColumns = ['packageId', 'retailerName'];
        this.entryPerforming = false;
        this.entryError = '';
        this.fishesProv = [];
        this.fishProvColumns = ['isoTimestamp', 'fishId', 'location', 'fishermanName'];
        this.packagesProv = [];
        this.packageProvColumns = ['isoTimestamp', 'fishIds', 'packageId', 'processingFacilityName'];
        this.shipmentsProv = [];
        this.shipmentProvColumns = ['isoTimestamp', 'fishIds', 'toLocation', 'shipmentCompanyName'];
        this.transportationsProv = [];
        this.transportationProvColumns = ['isoTimestamp', 'packageId', 'toLocation', 'distributorName'];
        this.salesProv = [];
        this.saleProvColumns = ['isoTimestamp', 'packageId'];
        this.entriesProv = [];
        this.entryProvColumns = ['isoTimestamp', 'packageId', 'retailerName'];
        this.error = '';
        this.fishForm = this.formBuilder.group({
            fishId: '',
            location: '',
            fishermanName: '',
        });
        this.packageForm = this.formBuilder.group({
            fishIds: [this.idsForPackage],
            packageId: '',
            processingFacilityName: '',
        });
        this.packageForm.controls.fishIds.setValue(this.idsForPackage);
        this.shipmentForm = this.formBuilder.group({
            fishIds: '',
            toLocation: '',
            shipmentCompanyName: '',
        });
        this.shipmentForm.controls.fishIds.setValue(this.idsForShipment);
        this.transportationForm = this.formBuilder.group({
            packageId: '',
            toLocation: '',
            distributorName: '',
        });
        this.inventoryEntryForm = this.formBuilder.group({
            packageId: '',
            retailerName: '',
        });
        this.sellingForm = this.formBuilder.group({
            packageId: '',
        });
        this.provenanceForm = this.formBuilder.group({
            packageId: '',
        });
    }
    ngOnInit() {
    }
    onRegisterFish(fish) {
        this.performing = true;
        this.apiService.registerCapturedFish(fish)
            .subscribe(res => {
            this.result = res;
            this.performing = false;
            this.getFishes();
        }, err => {
            this.result = err.message;
            this.performing = false;
        });
        this.fishForm.reset();
    }
    onRegisterPackage(packageFish) {
        this.performing = true;
        this.apiService.registerPackage(packageFish)
            .subscribe(res => {
            this.result = res;
            this.performing = false;
            this.getPackages();
        }, err => {
            this.result = err.message;
            this.performing = false;
        });
        this.packageForm.reset();
    }
    onRegisterShipment(shipment) {
        this.performing = true;
        this.apiService.registerShipment(shipment)
            .subscribe(res => {
            this.result = res;
            this.performing = false;
            this.getShipments();
        }, err => {
            this.result = err.message;
            this.performing = false;
        });
        this.shipmentForm.reset();
    }
    onRegisterTransportation(transportation) {
        this.performing = true;
        this.apiService.registerTransportation(transportation)
            .subscribe(res => {
            this.result = res;
            this.performing = false;
            this.getTransportations();
        }, err => {
            this.result = err.message;
            this.performing = false;
        });
        this.transportationForm.reset();
    }
    onRegisterInInventory(entry) {
        this.performing = true;
        this.apiService.registerInInventory(entry)
            .subscribe(res => {
            this.result = res;
            this.performing = false;
            this.getEntries();
        }, err => {
            this.result = err.message;
            this.performing = false;
        });
        this.inventoryEntryForm.reset();
    }
    onRegisterSelling(sale) {
        this.performing = true;
        this.apiService.registerSelling(sale)
            .subscribe(res => {
            this.result = res;
            this.performing = false;
            this.getSales();
        }, err => {
            this.result = err.message;
            this.performing = false;
        });
        this.sellingForm.reset();
    }
    getFishes() {
        this.fishPerforming = true;
        this.apiService.getAllRegisteredFishes()
            .subscribe(res => {
            this.fishes = res;
            this.fishPerforming = false;
        }, err => {
            this.fishError = err.message;
            this.fishPerforming = false;
        });
    }
    clearFishes() {
        this.fishes = [];
    }
    getPackages() {
        this.packagePerforming = true;
        this.apiService.getAllRegisteredPackages()
            .subscribe(res => {
            this.packages = res;
            this.packagePerforming = false;
        }, err => {
            this.packageError = err.message;
            this.packagePerforming = false;
        });
    }
    clearPackages() {
        this.packages = [];
    }
    getShipments() {
        this.shipmentPerforming = true;
        this.apiService.getAllRegisteredShipments()
            .subscribe(res => {
            this.shipments = res;
            this.shipmentPerforming = false;
        }, err => {
            this.shipmentError = err.message;
            this.shipmentPerforming = false;
        });
    }
    clearShipments() {
        this.shipments = [];
    }
    getTransportations() {
        this.transportationPerforming = true;
        this.apiService.getAllRegisteredTransportations()
            .subscribe(res => {
            this.transportations = res;
            this.transportationPerforming = false;
        }, err => {
            this.transportationError = err.message;
            this.transportationPerforming = false;
        });
    }
    clearTransportations() {
        this.transportations = [];
    }
    getSales() {
        console.log('retrieving sales..');
        this.salePerforming = true;
        const obs = this.apiService.getAllSoldPackages();
        obs.subscribe(res => {
            this.sales = res;
            this.salePerforming = false;
        }, err => {
            this.saleError = err.message;
            this.salePerforming = false;
        });
    }
    clearSales() {
        this.sales = [];
    }
    getEntries() {
        this.entryPerforming = true;
        this.apiService.getAllPackagesRegisteredInInventories()
            .subscribe(res => {
            this.entries = res;
            this.entryPerforming = false;
        }, err => {
            this.entryError = err.message;
            this.entryPerforming = false;
        });
    }
    clearEntries() {
        this.entries = [];
    }
    retrieveProvenance(provenanceForm) {
        this.performing = true;
        this.apiService.retrieveProvenance(provenanceForm.packageId)
            .subscribe(res => {
            console.log('=== PROVENANCE RECEIVED ===');
            console.log(res);
            if (res.packagingOccurrence == null) {
                this.error = 'Package not found';
            }
            else {
                this.fishesProv = res.fishCatchingOccurrences ? res.fishCatchingOccurrences : [];
                this.shipmentsProv = res.fishShipmentOccurrences ? res.fishShipmentOccurrences : [];
                this.packagesProv = res.packagingOccurrence ? [res.packagingOccurrence] : [];
                this.transportationsProv = res.transportationOccurrence ? [res.transportationOccurrence] : [];
                this.salesProv = res.sellingOccurrence ? [res.sellingOccurrence] : [];
                this.entriesProv = res.inventoryOccurrence ? [res.inventoryOccurrence] : [];
            }
            this.performing = false;
        }, err => {
            this.error = err.message;
            this.performing = false;
        });
    }
    clearProvenance() {
        this.fishesProv = [];
        this.packagesProv = [];
        this.shipmentsProv = [];
        this.transportationsProv = [];
        this.salesProv = [];
        this.entriesProv = [];
    }
    removeIdFromPackage(id) {
        const controller = this.packageForm.controls.fishIds;
        const index = this.idsForPackage.indexOf(id);
        if (index >= 0) {
            this.idsForPackage.splice(index, 1);
        }
        controller.markAsDirty();
    }
    addIdInPackage(event) {
        const input = event.input;
        const value = event.value;
        // Add a new id
        if ((value || '').trim()) {
            this.idsForPackage.push(value);
            this.packageForm.controls.fishIds.markAsDirty();
            // Reset the input value
            input.value = '';
        }
    }
    removeIdFromShipment(id) {
        const controller = this.shipmentForm.controls.fishIds;
        const index = this.idsForShipment.indexOf(id);
        if (index >= 0) {
            this.idsForShipment.splice(index, 1);
        }
        controller.markAsDirty();
    }
    addIdInShipment(event) {
        const input = event.input;
        const value = event.value;
        // Add a new id
        if ((value || '').trim()) {
            this.idsForShipment.push(value);
            this.shipmentForm.controls.fishIds.markAsDirty();
            // Reset the input value
            input.value = '';
        }
    }
    onTabClick(event) {
        if (event.index !== this.prevIndex) {
            this.result = null;
            this.error = '';
            this.performing = false;
            this.prevIndex = event.index;
            this.fishError = this.packageError = this.shipmentError = this.transportationError = this.entryError = this.saleError = '';
        }
    }
};
SeafoodComponent.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SeafoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-seafood',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seafood.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/seafood/seafood.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seafood.component.css */ "./src/app/pages/seafood/seafood.component.css")).default]
    })
], SeafoodComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/lampajr/SCIP-CaseStudy-2/ClientApplication/scip-client-application/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map