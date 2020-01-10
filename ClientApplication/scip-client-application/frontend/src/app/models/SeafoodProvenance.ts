import SeafoodOccurrence from './SeafoodOccurrence';
import Fish from './Fish';
import PackageSelling from './PackageSelling';
import InventoryEntry from './InventoryEntry';
import PackageTransportation from './PackageTransportation';
import FishShipment from './FishShipment';
import FishPackage from './FishPackage';

export default interface SeafoodProvenance {
    sellingOccurrence: SeafoodOccurrence<PackageSelling>;
    inventoryOccurrence: SeafoodOccurrence<InventoryEntry>;
    transportationOccurrence: SeafoodOccurrence<PackageTransportation>;
    packagingOccurrence: SeafoodOccurrence<FishPackage>;
    fishShipmentOccurrence: SeafoodOccurrence<FishShipment>;
    fishCatchingOccurrences: SeafoodOccurrence<Fish>[];
}
