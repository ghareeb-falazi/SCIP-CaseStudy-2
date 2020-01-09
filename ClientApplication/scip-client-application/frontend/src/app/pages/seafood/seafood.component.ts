import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-seafood',
  templateUrl: './seafood.component.html',
  styleUrls: ['./seafood.component.css']
})
export class SeafoodComponent implements OnInit {
  title = 'Seafood Supply Chain';

  fishForm: FormGroup;
  packageForm: FormGroup;
  shipmentForm: FormGroup;
  inventoryEntryForm: FormGroup;
  sellingForm: FormGroup;
  transportationForm: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  idsForPackage: string[] = [];
  idsForShipment: string[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;

  performing = false;
  result: any = null;
  prevIndex = 0;

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
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
  }

  ngOnInit() {
  }

  onRegisterFish(fish: any) {
    this.performing = true;
    this.apiService.registerCapturedFish(fish)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.fishForm.reset();
  }

  onRegisterPackage(packageFish: any) {
    this.performing = true;
    this.apiService.registerPackage(packageFish)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.packageForm.reset();
  }

  onRegisterShipment(shipment: any) {
    this.performing = true;
    this.apiService.registerShipment(shipment)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.shipmentForm.reset();
  }

  onRegisterTransportation(transportation: any) {
    this.performing = true;
    this.apiService.registerTransportation(transportation)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.transportationForm.reset();
  }

  onRegisterInInventory(entry: any) {
    this.performing = true;
    this.apiService.registerInInventory(entry)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.inventoryEntryForm.reset();
  }

  onRegisterSelling(sale: any) {
    this.performing = true;
    this.apiService.registerSelling(sale)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.sellingForm.reset();
  }

  removeIdFromPackage(id: string) {
    const controller = this.packageForm.controls.fishIds;
    const index = this.idsForPackage.indexOf(id);
    if (index >= 0) {
      this.idsForPackage.splice(index, 1);
    }
    controller.markAsDirty();
  }

  addIdInPackage(event: MatChipInputEvent): void {
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

  removeIdFromShipment(id: string) {
    const controller = this.shipmentForm.controls.fishIds;
    const index = this.idsForShipment.indexOf(id);
    if (index >= 0) {
      this.idsForShipment.splice(index, 1);
    }
    controller.markAsDirty();
  }

  addIdInShipment(event: MatChipInputEvent): void {
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
      console.log('changing tab to ' + event.index);
      this.result = null;
      this.performing = false;
      this.prevIndex = event.index;
    }
  }
}
