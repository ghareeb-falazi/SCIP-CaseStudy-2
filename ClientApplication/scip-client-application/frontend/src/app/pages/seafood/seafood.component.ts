import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
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

  idsForPackage: string[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.fishForm = this.formBuilder.group({
      fishId: '',
      location: '',
      fishermanName: '',
    });
    this.packageForm = this.formBuilder.group({
      fishdIds: this.formBuilder.array([this.idsForPackage]),
      packageId: '',
      processingFacilityName: '',
    });

    this.shipmentForm = this.formBuilder.group({
      fishIds: '',
      toLocation: '',
      shipmentCompanyName: '',
    });
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
    console.log(fish);
    this.fishForm.reset();
  }

  onRegisterPackage(packageFish: any) {
    console.log(packageFish);
    this.packageForm.reset();
  }

  onRegisterShipment(shipment: any) {
    console.log(shipment);
    this.shipmentForm.reset();
  }

  onRegisterTransportation(transportation: any) {
    console.log(transportation);
    this.transportationForm.reset();
  }

  onRegisterInInventory(entry: any) {
    console.log(entry);
    this.inventoryEntryForm.reset();
  }

  onRegisterSelling(sale: any) {
    console.log(sale);
    this.sellingForm.reset();
  }

  removeIdFromPackage(id: string) {
    const index = this.idsForPackage.indexOf(id);
    if (index >= 0) {
      this.idsForPackage.splice(index, 1);
    }
  }

  addIdInPackage(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.idsForPackage.push(value);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
}
