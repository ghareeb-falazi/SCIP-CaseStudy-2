import SupplyChainAction from './SupplyChainAction';

export default interface Fish extends SupplyChainAction {
    fishId: string;
    location: string;
    fishermanName: string;
}
