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
import { Node, Edge, Layout, ClusterNode } from '@swimlane/ngx-graph';
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
  fishesProv = [];

  provenanceShipments: SeafoodOccurrence<FishShipment>[] = [];
  shipmentProvColumns = ['isoTimestamp', 'fishIds', 'toLocation', 'shipmentCompanyName'];
  shipmentsProv = [];

  provenancePackage: SeafoodOccurrence<FishPackage> = null;
  packageProvColumns = ['isoTimestamp', 'fishIds', 'packageId', 'processingFacilityName'];
  packagesProv = [];

  provenanceTransportation: SeafoodOccurrence<PackageTransportation> = null;
  transportationProvColumns = ['isoTimestamp', 'packageId', 'toLocation', 'distributorName'];
  transportationsProv = [];

  provenanceSelling: SeafoodOccurrence<PackageSelling> = null;
  saleProvColumns = ['isoTimestamp', 'packageId'];
  salesProv = [];

  provenanceEntry: SeafoodOccurrence<InventoryEntry> = null;
  entryProvColumns = ['isoTimestamp', 'packageId', 'retailerName'];
  entriesProv = [];

  error = '';

  curve = shape.curveCardinal;
  size = [1000, 750];
  links: Edge[] = [];
  nodes: Node[] = [];
  clusters: ClusterNode[] = [];
  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  showInfo = '';

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
    this.getFishes();
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
    this.clearGraph();
    const id = provenanceForm.packageId;
    this.performing = true;
    this.apiService.retrieveProvenance(id)
      .subscribe(
        res => {

          // this.clusters = [
          //   {
          //     id: 'one',
          //     label: 'fishes',
          //     childNodeIds: [],
          //     data: {
          //       color: '#d9f4f6',
          //     }
          //   },
          //   {
          //     id: 'two',
          //     label: 'shipments',
          //     childNodeIds: [],
          //     data: {
          //       color: '#dbf6d9',
          //     }
          //   }
          // ];

          console.log('=== PROVENANCE RECEIVED ===');
          if (res.packagingOccurrence == null) {
            this.error = 'Package not found';
          } else {
            this.provenanceFishes = res.fishCatchingOccurrences ? res.fishCatchingOccurrences : [];
            for (const fish of this.provenanceFishes) {
              this.nodes = [
                ...this.nodes,
                {
                  id: fish.occurrence.fishId,
                  label: 'Fish Captured',
                  data: {
                    isoTimestamp: fish.isoTimestamp,
                    location: fish.occurrence.location,
                    fishermanName: fish.occurrence.fishermanName,
                    color: '#3533ff',
                    type: 'fish',
                  }
                }
              ];
              // this.clusters[0].childNodeIds = [
              //   ...this.clusters[0].childNodeIds,
              //   fish.occurrence.fishId
              // ];
            }

            this.provenanceShipments = res.fishShipmentOccurrences ? res.fishShipmentOccurrences : [];
            for (const shipment of this.provenanceShipments) {
              const shipmentNodeId = shipment.occurrence.fishIds.toString();
              this.nodes = [
                ...this.nodes,
                {
                  id: shipmentNodeId,
                  label: 'Fishes Shipped',
                  data: {
                    isoTimestamp: shipment.isoTimestamp,
                    toLocation: shipment.occurrence.toLocation,
                    shipmentCompanyName: shipment.occurrence.shipmentCompanyName,
                    color: '#33fbff',
                    type: 'shipment',
                  }
                }
              ];
              // this.clusters[1].childNodeIds = [
              //   ...this.clusters[1].childNodeIds,
              //   shipmentNodeId
              // ];

              for (const fishId of shipment.occurrence.fishIds) {
                const check = this.nodes.filter(value => value.id === fishId);
                if (check.length !== 0) {
                  this.links = [
                    ...this.links,
                    {
                      label: 'fish shipped',
                      source: fishId,
                      target: shipmentNodeId,
                      data: {
                        linkText: 'fish shipped',
                      }
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
                  label: 'Package ' + this.provenancePackage.occurrence.packageId,
                  data: {
                    isoTimestamp: this.provenancePackage.isoTimestamp,
                    fishIds: this.provenancePackage.occurrence.fishIds,
                    processingFacilityName: this.provenancePackage.occurrence.processingFacilityName,
                    color: '#ff5733',
                    type: 'package',
                  }
                }
              ];

              for (const fishId of this.provenancePackage.occurrence.fishIds) {
                const check = this.nodes.filter(value => value.id === fishId);
                if (check.length !== 0) {
                  this.links = [
                    ...this.links,
                    {
                      label: 'package registration',
                      source: fishId,
                      target: packageNodeId,
                      data: {
                        linkText: 'package registration',
                      }
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
                  label: 'Package Transported',
                  data: {
                    isoTimestamp: this.provenanceTransportation.isoTimestamp,
                    toLocation: this.provenanceTransportation.occurrence.toLocation,
                    distributorName: this.provenanceTransportation.occurrence.distributorName,
                    color: '#35ff33',
                    type: 'transportation',
                  }
                }
              ];

              this.links = [
                ...this.links,
                {
                  label: 'package transporting',
                  source: 'package-' + this.provenanceTransportation.occurrence.packageId,
                  target: transportationNodeId,
                  data: {
                    linkText: 'package transporting',
                  }
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
                  label: 'Package Sold',
                  data: {
                    isoTimestamp: this.provenanceSelling.isoTimestamp,
                    color: '#f1ff33',
                    type: 'selling',
                  }
                }
              ];

              this.links = [
                ...this.links,
                {
                  label: 'package selling',
                  source: 'package-' + this.provenanceSelling.occurrence.packageId,
                  target: sellingNodeId,
                  data: {
                    linkText: 'package selling',
                  }
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
                  label: 'Package Registered In Inventory',
                  data: {
                    isoTimestamp: this.provenanceEntry.isoTimestamp,
                    retailerName: this.provenanceEntry.occurrence.retailerName,
                    color: '#ff33de',
                    type: 'inventory',
                  }
                }
              ];

              this.links = [
                ...this.links,
                {
                  label: `package's inventory registration`,
                  source: 'package-' + this.provenanceEntry.occurrence.packageId,
                  target: entryNodeId,
                  data: {
                    linkText: `package's inventory registration`
                  }
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

  clearGraph() {
    this.nodes = [];
    this.links = [];
    this.clusters = [];
    this.showInfo = '';
  }

  clearProvenance() {
    this.provenanceFishes = [];
    this.fishesProv = [];
    this.provenanceShipments = [];
    this.shipmentsProv = [];
    this.provenancePackage = null;
    this.packagesProv = [];
    this.provenanceTransportation = null;
    this.transportationsProv = [];
    this.provenanceSelling = null;
    this.salesProv = [];
    this.provenanceEntry = null;
    this.entriesProv = [];
    this.clearGraph();
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

  onNodeClicked(event) {
    console.log('Node clicked..');
    const id = event.target.id;
    const node = this.nodes.find(v => v.id === id);
    this.showInfo = node.data.type;

    switch (this.showInfo) {
      case 'fish':
        this.fishesProv = [this.provenanceFishes.find(v => v.occurrence.fishId = id)];
        break;
      case 'shipment':
        this.shipmentsProv = [this.provenanceShipments.find(v => v.occurrence.fishIds = id)];
        break;
      case 'package':
        this.packagesProv = [this.provenancePackage];
        break;
      case 'transportation':
        this.transportationsProv = [this.provenanceTransportation];
        break;
      case 'inventory':
        this.entriesProv = [this.provenanceEntry];
        break;
      case 'selling':
        this.salesProv = [this.provenanceSelling];
        break;
    }
  }

  onEdgeClicked(event) {}
}
