import SupplyChainAction from './SupplyChainAction';

export default interface FishPackage extends SupplyChainAction {
    fishIds: string[];
    packageId: string;
    processingFacilityName: string;
}
