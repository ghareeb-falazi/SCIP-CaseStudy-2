import SupplyChainAction from './SupplyChainAction';

export default interface InventoryEntry extends SupplyChainAction {
    packageId: string;
    retailerName: string;
}
