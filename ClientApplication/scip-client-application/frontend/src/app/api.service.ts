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

  public retrieveProvenance(packageId: string): Observable<SeafoodProvenance> {
    const url = `${environment.apiUrl}/seafood/provenance?packageId=${packageId}`;
    return this.http.get<SeafoodProvenance>(url);
  }
}
