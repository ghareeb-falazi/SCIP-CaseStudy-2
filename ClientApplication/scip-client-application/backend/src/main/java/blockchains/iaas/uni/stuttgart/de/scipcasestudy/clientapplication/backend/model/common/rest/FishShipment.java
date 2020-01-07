package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.List;

import lombok.Data;

@Data
public class FishShipment extends SeafoodEvent {
    private List<String> fishIds;
    private String toLocation;
    private String shipmentCompanyName;
}
