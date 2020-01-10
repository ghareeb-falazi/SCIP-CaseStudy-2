import SupplyChainAction from './SupplyChainAction';

export default interface FishShipment extends SupplyChainAction {
    fishIds: string[];
    toLocation: string;
    shipmentCompanyName: string;
}
