import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { MatChipInputEvent } from '@angular/material/chips';
import Fish from 'src/app/models/Fish';
import FishPackage from 'src/app/models/FishPackage';
import FishShipment from 'src/app/models/FishShipment';
import PackageTransportation from 'src/app/models/PackageTransportation';
import PackageSelling from 'src/app/models/PackageSelling';
import InventoryEntry from 'src/app/models/InventoryEntry';
import SeafoodOccurrence from 'src/app/models/SeafoodOccurrence';
import * as shape from 'd3-shape';
import { Node, Edge, Layout } from '@swimlane/ngx-graph';
import { DagreNodesOnlyLayout } from './customDagreLayout';
import { Subject } from 'rxjs';

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
  provenanceForm: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  idsForPackage: string[] = [];
  idsForShipment: string[] = [];
  selectable = true;
  removable = true;
  addOnBlur = true;

  performing = false;
  result: any = null;
  prevIndex = 0;

  onReload = true;

  fishes: Fish[] = [];
  fishColumns = ['fishId', 'location', 'fishermanName'];
  fishPerforming = false;
  fishError = '';
  packages: FishPackage[] = [];
  packageColumns = ['fishIds', 'packageId', 'processingFacilityName'];
  packagePerforming = false;
  packageError = '';
  shipments: FishShipment[] = [];
  shipmentColumns = ['fishIds', 'toLocation', 'shipmentCompanyName'];
  shipmentPerforming = false;
  shipmentError = '';
  transportations: PackageTransportation[] = [];
  transportationColumns = ['packageId', 'toLocation', 'distributorName'];
  transportationPerforming = false;
  transportationError = '';
  sales: PackageSelling[] = [];
  saleColumns = ['packageId'];
  salePerforming = false;
  saleError = '';
  entries: InventoryEntry[] = [];
  entryColumns = ['packageId', 'retailerName'];
  entryPerforming = false;
  entryError = '';


  provenanceFishes: SeafoodOccurrence<Fish>[] = [];
  fishProvColumns = ['isoTimestamp', 'fishId', 'location', 'fishermanName'];

  provenanceShipments: SeafoodOccurrence<FishShipment>[] = [];
  shipmentProvColumns = ['isoTimestamp', 'fishIds', 'toLocation', 'shipmentCompanyName'];

  provenancePackage: SeafoodOccurrence<FishPackage> = null;
  packageProvColumns = ['isoTimestamp', 'fishIds', 'packageId', 'processingFacilityName'];

  provenanceTransportation: SeafoodOccurrence<PackageTransportation> = null;
  transportationProvColumns = ['isoTimestamp', 'packageId', 'toLocation', 'distributorName'];

  provenanceSelling: SeafoodOccurrence<PackageSelling> = null;
  saleProvColumns = ['isoTimestamp', 'packageId'];

  provenanceEntry: SeafoodOccurrence<InventoryEntry> = null;
  entryProvColumns = ['isoTimestamp', 'packageId', 'retailerName'];

  error = '';

  // // provenance graph data
  // LEVEL_FISH = 10;
  // LEVEL_SHIPMENT = 100;
  // LEVEL_PACKAGE = 200;
  // LEVEL_TRANSPORT = 300;
  // LEVEL_INVENTORY = 400;
  // LEVEL_SELLING = 500;

  layoutSettings = {
    orientation: 'TB'
  };
  layout: Layout = new DagreNodesOnlyLayout();
  curve = shape.curveBundle.beta(1);
  size = [1000, 750];
  links: Edge[] = [];
  nodes: Node[] = [];
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();

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
    this.provenanceForm = this.formBuilder.group({
      packageId: '',
    });
  }

  ngOnInit() {
    if (this.onReload) {
      this.getFishes();
    }
  }

  onRegisterFish(fish: any) {
    this.performing = true;
    this.apiService.registerCapturedFish(fish)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
          this.getFishes();
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
          this.getPackages();
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
          this.getShipments();
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
          this.getTransportations();
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
          this.getEntries();
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
          this.getSales();
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    this.sellingForm.reset();
  }

  getFishes() {
    this.fishPerforming = true;
    this.apiService.getAllRegisteredFishes()
      .subscribe(
        res => {
          this.fishes = res;
          this.fishPerforming = false;
        },
        err => {
          this.fishError = err.message;
          this.fishPerforming = false;
        }
      );
  }

  clearFishes() {
    this.fishes = [];
  }

  getPackages() {
    this.packagePerforming = true;
    this.apiService.getAllRegisteredPackages()
      .subscribe(
        res => {
          this.packages = res;
          this.packagePerforming = false;
        },
        err => {
          this.packageError = err.message;
          this.packagePerforming = false;
        }
      );
  }

  clearPackages() {
    this.packages = [];
  }

  getShipments() {
    this.shipmentPerforming = true;
    this.apiService.getAllRegisteredShipments()
      .subscribe(
        res => {
          this.shipments = res;
          this.shipmentPerforming = false;
        },
        err => {
          this.shipmentError = err.message;
          this.shipmentPerforming = false;
        }
      );
  }

  clearShipments() {
    this.shipments = [];
  }

  getTransportations() {
    this.transportationPerforming = true;
    this.apiService.getAllRegisteredTransportations()
      .subscribe(
        res => {
          this.transportations = res;
          this.transportationPerforming = false;
        },
        err => {
          this.transportationError = err.message;
          this.transportationPerforming = false;
        }
      );
  }

  clearTransportations() {
    this.transportations = [];
  }

  getSales() {
    console.log('retrieving sales..');
    this.salePerforming = true;
    const obs = this.apiService.getAllSoldPackages();

    obs.subscribe(
        res => {
          this.sales = res;
          this.salePerforming = false;
        },
        err => {
          this.saleError = err.message;
          this.salePerforming = false;
        }
      );
  }

  clearSales() {
    this.sales = [];
  }

  getEntries() {
    this.entryPerforming = true;
    this.apiService.getAllPackagesRegisteredInInventories()
      .subscribe(
        res => {
          this.entries = res;
          this.entryPerforming = false;
        },
        err => {
          this.entryError = err.message;
          this.entryPerforming = false;
        }
      );
  }

  clearEntries() {
    this.entries = [];
  }

  retrieveProvenance(provenanceForm) {
    const id = provenanceForm.packageId;
    this.performing = true;
    this.apiService.retrieveProvenance(id)
      .subscribe(
        res => {
          console.log('=== PROVENANCE RECEIVED ===');
          if (res.packagingOccurrence == null) {
            this.error = 'Package not found';
          } else {
            this.provenanceFishes = res.fishCatchingOccurrences ? res.fishCatchingOccurrences : [];
            let baseFish = 10;
            for (const fish of this.provenanceFishes) {
              this.nodes = [
                ...this.nodes,
                {
                  id: fish.occurrence.fishId,
                  label: 'Fish Catching',
                  data: {
                    isoTimestamp: fish.isoTimestamp,
                    location: fish.occurrence.location,
                    fishermanName: fish.occurrence.fishermanName
                  }
                }
              ];
              baseFish += 80;
            }

            this.provenanceShipments = res.fishShipmentOccurrences ? res.fishShipmentOccurrences : [];
            let baseShipment = 10;
            for (const shipment of this.provenanceShipments) {
              this.nodes = [
                ...this.nodes,
                {
                  id: shipment.occurrence.fishIds.toString(),
                  label: 'Shipment Occurrence',
                  data: {
                    isoTimestamp: shipment.isoTimestamp,
                    toLocation: shipment.occurrence.toLocation,
                    shipmentCompanyName: shipment.occurrence.shipmentCompanyName
                  }
                }
              ];
              baseShipment += 30;

              for (const fishId of shipment.occurrence.fishIds) {
                const check = this.nodes.filter(value => value.id === fishId);
                if (check.length !== 0) {
                  this.links = [
                    ...this.links,
                    {
                      source: fishId,
                      target: shipment.occurrence.fishIds.toString(),
                    }
                  ];
                }
              }
            }

            this.provenancePackage = res.packagingOccurrence;
            if (this.provenancePackage != null) {
              const packageNodeId = 'package-' + this.provenancePackage.occurrence.packageId;
              this.nodes = [
                ...this.nodes,
                {
                  id: packageNodeId,
                  label: 'Package Occurrence',
                  data: {
                    isoTimestamp: this.provenancePackage.isoTimestamp,
                    fishIds: this.provenancePackage.occurrence.fishIds,
                    processingFacilityName: this.provenancePackage.occurrence.processingFacilityName
                  }
                }
              ];

              for (const fishId of this.provenancePackage.occurrence.fishIds) {
                const check = this.nodes.filter(value => value.id === fishId);
                if (check.length !== 0) {
                  this.links = [
                    ...this.links,
                    {
                      source: fishId,
                      target: packageNodeId,
                    }
                  ];
                }
              }
            }

            this.provenanceTransportation = res.transportationOccurrence;
            if (this.provenanceTransportation != null) {
              const transportationNodeId = 'transport-' + this.provenanceTransportation.occurrence.packageId;
              this.nodes = [
                ...this.nodes,
                {
                  id: transportationNodeId,
                  label: 'Transport Occurrence',
                  data: {
                    isoTimestamp: this.provenanceTransportation.isoTimestamp,
                    toLocation: this.provenanceTransportation.occurrence.toLocation,
                    distributorName: this.provenanceTransportation.occurrence.distributorName,
                  }
                }
              ];

              this.links = [
                ...this.links,
                {
                  source: 'package-' + this.provenanceTransportation.occurrence.packageId,
                  target: transportationNodeId,
                }
              ];
            }

            this.provenanceSelling = res.sellingOccurrence;
            if (this.provenanceSelling != null) {
              const sellingNodeId = 'selling-' + this.provenanceSelling.occurrence.packageId;
              this.nodes = [
                ...this.nodes,
                {
                  id: sellingNodeId,
                  label: 'Selling Occurrence',
                  data: {
                    isoTimestamp: this.provenanceSelling.isoTimestamp,
                  }
                }
              ];

              this.links = [
                ...this.links,
                {
                  source: 'package-' + this.provenanceSelling.occurrence.packageId,
                  target: sellingNodeId,
                }
              ];
            }

            this.provenanceEntry = res.inventoryOccurrence;
            if (this.provenanceEntry != null) {
              const entryNodeId = 'entry-' + this.provenanceEntry.occurrence.packageId;
              this.nodes = [
                ...this.nodes,
                {
                  id: entryNodeId,
                  label: 'Inventory Entry Occurrence',
                  data: {
                    isoTimestamp: this.provenanceEntry.isoTimestamp,
                    retailerName: this.provenanceEntry.occurrence.retailerName,
                  }
                }
              ];

              this.links = [
                ...this.links,
                {
                  source: 'package-' + this.provenanceEntry.occurrence.packageId,
                  target: entryNodeId,
                }
              ];
            }
          }

          this.performing = false;
        },
        err => {
          this.error = err.message;
          this.performing = false;
        }
      );
  }

  clearProvenance() {
    this.provenanceFishes = [];
    this.provenanceShipments = [];
    this.provenancePackage = null;
    this.provenanceTransportation = null;
    this.provenanceSelling = null;
    this.provenanceEntry = null;
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
      this.result = null;
      this.error = '';
      this.performing = false;
      this.prevIndex = event.index;
      this.fishError = this.packageError = this.shipmentError = this.transportationError = this.entryError = this.saleError = '';

      if (this.onReload) {
        switch (event.index) {
          case 0:
            this.getFishes();
            break;
          case 1:
            this.getShipments();
            break;
          case 2:
            this.getPackages();
            break;
          case 3:
            this.getTransportations();
            break;
          case 4:
            this.getEntries();
            break;
          case 5:
            this.getSales();
            break;
          default:
            break;
        }
      }
    }
  }
}
