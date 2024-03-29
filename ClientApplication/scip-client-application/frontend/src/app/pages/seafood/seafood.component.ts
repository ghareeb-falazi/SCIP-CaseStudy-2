import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validator, FormControl, Validators } from '@angular/forms';
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
  // idsForPackage: string[] = [];
  // idsForShipment: string[] = [];
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
  // size = [1000, 1000];
  links: Edge[] = [];
  nodes: Node[] = [];
  clusters: ClusterNode[] = [];
  update$: Subject<boolean> = new Subject();
  center$: Subject<boolean> = new Subject();
  zoomToFit$: Subject<boolean> = new Subject();
  showInfo = '';

  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.fishForm = this.formBuilder.group({
      fishId: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      fishermanName: new FormControl('', Validators.required),
    });
    this.packageForm = this.formBuilder.group({
      fishIds: this.formBuilder.array([]),
      packageId: new FormControl('', Validators.required),
      processingFacilityName: new FormControl('', Validators.required),
    });

    this.shipmentForm = this.formBuilder.group({
      fishIds: this.formBuilder.array([]),
      toLocation: new FormControl('', Validators.required),
      shipmentCompanyName: new FormControl('', Validators.required),
    });

    this.transportationForm = this.formBuilder.group({
      packageId: new FormControl('', Validators.required),
      toLocation: new FormControl('', Validators.required),
      distributorName: new FormControl('', Validators.required),
    });
    this.inventoryEntryForm = this.formBuilder.group({
      packageId: new FormControl('', Validators.required),
      retailerName: new FormControl('', Validators.required),
    });
    this.sellingForm = this.formBuilder.group({
      packageId: new FormControl('', Validators.required),
    });
    this.provenanceForm = this.formBuilder.group({
      packageId: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getFishes();
  }

  onRegisterFish(fish: any) {
    this.performing = true;
    if (this.fishForm.valid) {
      this.apiService.registerCapturedFish(fish)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
          this.fishForm.reset();
          this.getFishes();
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    } else {
      this.result = 'Invalid form!';
      this.performing = false;
    }
  }

  onRegisterPackage(packageFish: any) {
    this.performing = true;
    if (this.packageForm.valid && packageFish.fishIds.length > 0) {
      this.apiService.registerPackage(packageFish)
        .subscribe(
          res => {
            this.result = res;
            this.performing = false;
            this.packageForm.reset();
            this.getPackages();
          },
          err => {
            this.result = err.message;
            this.performing = false;
        });
    } else {
      this.result = 'Invalid form!';
      this.performing = false;
    }
  }

  onRegisterShipment(shipment: any) {
    console.log(shipment);
    this.performing = true;
    if (this.shipmentForm.valid && shipment.fishIds.length > 0) {
      this.apiService.registerShipment(shipment)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
          this.shipmentForm.reset();
          this.getShipments();
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    } else {
      this.result = 'Invalid form!';
      this.performing = false;
    }
  }

  onRegisterTransportation(transportation: any) {
    this.performing = true;
    if (this.transportationForm.valid) {
      this.apiService.registerTransportation(transportation)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
          this.transportationForm.reset();
          this.getTransportations();
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    } else {
      this.result = 'Invalid form!';
      this.performing = false;
    }
  }

  onRegisterInInventory(entry: any) {
    this.performing = true;
    if (this.inventoryEntryForm.valid) {
      this.apiService.registerInInventory(entry)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
          this.inventoryEntryForm.reset();
          this.getEntries();
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    } else {
      this.result = 'Invalid form!';
      this.performing = false;
    }
  }

  onRegisterSelling(sale: any) {
    this.performing = true;
    if (this.sellingForm.valid) {
      this.apiService.registerSelling(sale)
      .subscribe(
        res => {
          this.result = res;
          this.performing = false;
          this.sellingForm.reset();
          this.getSales();
        },
        err => {
          this.result = err.message;
          this.performing = false;
      });
    } else {
      this.result = 'Invalid form!';
      this.performing = false;
    }
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
    if (this.provenanceForm.valid) {
      this.apiService.retrieveProvenance(id)
      .subscribe(
        res => {
          if (res.packagingOccurrence == null) {
            this.error = 'Package not found';
          } else {
            this.provenanceFishes = res.fishCatchingOccurrences ? res.fishCatchingOccurrences : [];
            for (const fish of this.provenanceFishes) {
              this.nodes = [
                ...this.nodes,
                {
                  id: fish.occurrence.fishId,
                  label: `Fish <${fish.occurrence.fishId}> Captured`,
                  data: {
                    isoTimestamp: fish.isoTimestamp,
                    location: fish.occurrence.location,
                    fishermanName: fish.occurrence.fishermanName,
                    color: '#3533ff',
                    type: 'fish',
                  }
                }
              ];
            }

            this.provenanceShipments = res.fishShipmentOccurrences ? res.fishShipmentOccurrences : [];
            for (const shipment of this.provenanceShipments) {
              const shipmentNodeId = 'shipment-' + shipment.occurrence.fishIds.toString();
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

              for (const fishId of shipment.occurrence.fishIds) {
                const check = this.nodes.filter(value => value.id === fishId);
                if (check.length !== 0) {
                  this.links = [
                    ...this.links,
                    {
                      label: 'shipping',
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
                  label: 'Package <' + this.provenancePackage.occurrence.packageId + '> Registered',
                  data: {
                    isoTimestamp: this.provenancePackage.isoTimestamp,
                    fishIds: this.provenancePackage.occurrence.fishIds,
                    processingFacilityName: this.provenancePackage.occurrence.processingFacilityName,
                    color: '#ff5733',
                    type: 'package',
                  }
                }
              ];

              for (const ship of this.provenanceShipments) {
                this.links = [
                  ...this.links,
                  {
                    label: 'registering',
                    source: 'shipment-' + ship.occurrence.fishIds.toString(),
                    target: packageNodeId,
                    data: {
                      linkText: 'package registration',
                    }
                  }
                ];
              }
            }

            this.provenanceTransportation = res.transportationOccurrence;
            if (this.provenanceTransportation != null) {
              const transportationNodeId = 'transport-' + this.provenanceTransportation.occurrence.packageId;
              this.nodes = [
                ...this.nodes,
                {
                  id: transportationNodeId,
                  label: `Package <${this.provenanceTransportation.occurrence.packageId}> Transported`,
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
                  label: 'transporting',
                  source: 'package-' + this.provenanceTransportation.occurrence.packageId,
                  target: transportationNodeId,
                  data: {
                    linkText: 'package transporting',
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
                  label: `Package <${this.provenanceEntry.occurrence.packageId}> Registered In Inventory`,
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
                  label: `registering`,
                  source: 'transport-' + this.provenanceTransportation.occurrence.packageId,
                  target: entryNodeId,
                  data: {
                    linkText: `package's inventory registration`
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
                  label: `Package <${this.provenanceSelling.occurrence.packageId}> Sold`,
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
                  label: 'selling',
                  source: 'entry-' + this.provenanceEntry.occurrence.packageId,
                  target: sellingNodeId,
                  data: {
                    linkText: 'package selling',
                  }
                }
              ];
            }
          }
          this.performing = false;
          console.log(this.links);
        },
        err => {
          this.error = err.message;
          this.performing = false;
        }
      );
    } else {
      this.error = 'Missing package identifier!';
      this.performing = false;
    }
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
    const index = controller.value.indexOf(id);
    if (index >= 0) {
      controller.value.splice(index, 1);
    }
    controller.markAsDirty();
  }

  addIdInPackage(event: MatChipInputEvent): void {
    const controller = this.packageForm.controls.fishIds;
    const input = event.input;
    const value = event.value;

    // Add a new id
    if ((value || '').trim()) {
      controller.value.push(value);

      controller.markAsDirty();
      // Reset the input value
      input.value = '';
    }
  }

  removeIdFromShipment(id: string) {
    const controller = this.shipmentForm.controls.fishIds;
    const index = controller.value.indexOf(id);
    if (index >= 0) {
      controller.value.splice(index, 1);
    }
    controller.markAsDirty();
  }

  addIdInShipment(event: MatChipInputEvent): void {
    const controller = this.shipmentForm.controls.fishIds;
    const input = event.input;
    const value = event.value;

    // Add a new id
    if ((value || '').trim()) {
      controller.value.push(value);

      controller.markAsDirty();
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
    const id: string = event.target.id;
    const node = this.nodes.find(v => v.id === id);
    this.showInfo = node.data.type;

    switch (this.showInfo) {
      case 'fish':
        this.fishesProv = [this.provenanceFishes.find(v => v.occurrence.fishId === id)];
        break;
      case 'shipment':
        this.shipmentsProv = [this.provenanceShipments.find(v => v.occurrence.fishIds.toString() === id.replace('shipment-', ''))];
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
