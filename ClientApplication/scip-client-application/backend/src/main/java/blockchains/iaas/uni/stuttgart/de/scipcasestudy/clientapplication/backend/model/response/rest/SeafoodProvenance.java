package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest;

import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.Fish;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.FishPackage;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.FishShipment;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.InventoryEntry;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.PackageSelling;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.PackageTransportation;
import lombok.Data;

@Data
public class SeafoodProvenance {

    /**
     * Only has a value if the fish package is already sold.
     */
    private SeafoodOccurrence<PackageSelling> sellingOccurrence;
    /**
     * The inventory entry that refers to a specific fish package
     */
    private SeafoodOccurrence<InventoryEntry> inventoryOccurrence;
    /**
     * The transportation entry that refers to a specific fish package
     */
    private SeafoodOccurrence<PackageTransportation> transportationOccurrence;
    /**
     * Refers to the event of packaging a fish package
     */
    private SeafoodOccurrence<FishPackage> packagingOccurrence;
    /**
     * Refers to all shipment events that included the fish(es) that constitute a given fish package
     */
    private List<SeafoodOccurrence<FishShipment>> fishShipmentOccurrences;
    /**
     * Refers to all fish catching events of fish(es) that constitute a given fish package
     */
    private List<SeafoodOccurrence<Fish>> fishCatchingOccurrences;
}
