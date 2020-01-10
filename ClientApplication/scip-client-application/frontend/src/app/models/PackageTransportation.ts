import SupplyChainAction from './SupplyChainAction';

export default interface PackageTransportation extends SupplyChainAction {
    packageId: string;
    toLocation: string;
    distributorName: string;
}
