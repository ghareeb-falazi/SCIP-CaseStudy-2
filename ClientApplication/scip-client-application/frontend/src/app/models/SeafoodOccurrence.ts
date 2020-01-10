import Fish from './Fish';
import FishPackage from './FishPackage';
import InventoryEntry from './InventoryEntry';
import PackageSelling from './PackageSelling';
import FishShipment from './FishShipment';
import PackageTransportation from './PackageTransportation';
import SupplyChainAction from './SupplyChainAction';

export default interface SeafoodOccurrence <T extends SupplyChainAction> {
    isoTimestamp: string;
    occurrence: T;
}
