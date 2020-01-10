import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { environment } from '../environments/environment';
import Fish from './models/Fish';
import FishShipment from './models/FishShipment';
import FishPackage from './models/FishPackage';
import PackageTransportation from './models/PackageTransportation';
import InventoryEntry from './models/InventoryEntry';
import PackageSelling from './models/PackageSelling';
import SeafoodProvenance from './models/SeafoodProvenance';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /********************************** FISH **********************************/

  public registerCapturedFish(fish: Fish): Observable<string> {
    const url = `${environment.apiUrl}/seafood/fish`;
    return this.http.post(url, fish, { responseType: 'text' });
  }

  public getAllRegisteredFishes(): Observable<Fish[]> {
    const url = `${environment.apiUrl}/seafood/fish`;
    return this.http.get<Fish[]>(url);
  }

  /******************************** SHIPMENT ********************************/

  public registerShipment(fishShipment: FishShipment): Observable<string>  {
    const url = `${environment.apiUrl}/seafood/shipment`;
    return this.http.post(url, fishShipment, { responseType: 'text' });
  }

  public getAllRegisteredShipments(): Observable<FishShipment[]> {
    const url = `${environment.apiUrl}/seafood/shipment`;
    return this.http.get<FishShipment[]>(url);
  }

  /******************************* PACKAGING ********************************/

  public registerPackage(fishPackage: FishPackage): Observable<string>  {
    const url = `${environment.apiUrl}/seafood/package`;
    return this.http.post(url, fishPackage, { responseType: 'text' });
  }

  public getAllRegisteredPackages(): Observable<FishPackage[]> {
    const url = `${environment.apiUrl}/seafood/package`;
    return this.http.get<FishPackage[]>(url);
  }

  /***************************** TRANSPORTATION *****************************/

  public registerTransportation(packageTransportation: PackageTransportation): Observable<string>  {
    const url = `${environment.apiUrl}/seafood/transportation`;
    return this.http.post(url, packageTransportation, { responseType: 'text' });
  }

  public getAllRegisteredTransportations(): Observable<PackageTransportation[]> {
    const url = `${environment.apiUrl}/seafood/transportation`;
    // const packages: PackageTransportation[] = [
    //   {
    //     packageId: 'abcd',
    //     toLocation: 'Milano',
    //     distributorName: 'UPS'
    //   },
    //   {
    //     packageId: '1224',
    //     toLocation: 'Verona',
    //     distributorName: 'Bartolini'
    //   },
    //   {
    //     packageId: 'ab34',
    //     toLocation: 'Cremona',
    //     distributorName: 'Poste Italiane'
    //   }
    // ];
    // const pr: Promise<PackageTransportation[]> = Promise.all(packages);
    // return (from(pr)) as Observable<PackageTransportation[]>;
    return this.http.get<PackageTransportation[]>(url);
  }

  /******************************* INVENTORY ********************************/

  public registerInInventory(inventoryEntry: InventoryEntry): Observable<string>  {
    const url = `${environment.apiUrl}/seafood/inventory`;
    return this.http.post(url, inventoryEntry, { responseType: 'text' });
  }

  public getAllPackagesRegisteredInInventories(): Observable<InventoryEntry[]> {
    const url = `${environment.apiUrl}/seafood/inventory`;
    return this.http.get<InventoryEntry[]>(url);
  }

  /******************************** SELLING *********************************/

  public registerSelling(packageSelling: PackageSelling): Observable<string>  {
    const url = `${environment.apiUrl}/seafood/selling`;
    return this.http.post(url, packageSelling, { responseType: 'text' });
  }

  public getAllSoldPackages(): Observable<PackageSelling[]> {
    const url = `${environment.apiUrl}/seafood/selling`;
    return this.http.get<PackageSelling[]>(url);
  }

  /******************************* PROVENANCE *******************************/

  // TODO: how should I pass the packageId? as query param?
  public retrieveProvenance(packageId: string): Observable<SeafoodProvenance> {
    const url = `${environment.apiUrl}/seafood/provenance`;
    // const prov = {
    //   sellingOccurrence: {
    //     isoTimestamp: '123423435',
    //     occurrence: {
    //       packageId: 'abcdefg'
    //     }
    //   },
    //   inventoryOccurrence: {
    //     isoTimestamp: '459843759324',
    //     occurrence: {
    //       packageId: 'abcdefg',
    //       retailerName: 'Pippo Franco'
    //     }
    //   },
    //   transportationOccurrence: {
    //     isoTimestamp: '43574385743294',
    //     occurrence: {
    //       packageId: 'abcdefg',
    //       toLocation: 'Milan',
    //       distributorName: 'UPS'
    //     }
    //   },
    //   packagingOccurrence: {
    //     isoTimestamp: '58748439842932',
    //     occurrence: {
    //       fishIds: ['1', '2', '3'],
    //       packageId: 'abcdefg',
    //       processingFacilityName: 'SeaMar'
    //     }
    //   },
    //   fishShipmentOccurrence: {
    //     isoTimestamp: '4562389478324',
    //     occurrence: {
    //       fishIds: ['1', '2', '3'],
    //       toLocation: 'Genova',
    //       shipmentCompanyName: 'SeaMarTransport',
    //     }
    //   },
    //   fishCatchingOccurrences: [
    //     {
    //       isoTimestamp: '29875239489384',
    //       occurrence: {
    //         fishId: '1',
    //         location: 'Genova',
    //         fishermanName: 'Giorgio',
    //       }
    //     },
    //     {
    //       isoTimestamp: '29875239489384',
    //       occurrence: {
    //         fishId: '2',
    //         location: 'Genova',
    //         fishermanName: 'Giorgio',
    //       }
    //     },
    //     {
    //       isoTimestamp: '29875239489384',
    //       occurrence: {
    //         fishId: '3',
    //         location: 'Genova',
    //         fishermanName: 'Giorgio',
    //       }
    //     }
    //   ],
    // };
    // return of(prov);
    return this.http.get<SeafoodProvenance>(url);
  }
}
