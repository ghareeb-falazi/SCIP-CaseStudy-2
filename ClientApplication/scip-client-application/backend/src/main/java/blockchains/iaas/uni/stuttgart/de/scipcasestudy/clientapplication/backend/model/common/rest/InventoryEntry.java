package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import lombok.Data;

@Data
public class InventoryEntry extends SeafoodEvent {
    private String packageId;
    private String retailerName;
}
