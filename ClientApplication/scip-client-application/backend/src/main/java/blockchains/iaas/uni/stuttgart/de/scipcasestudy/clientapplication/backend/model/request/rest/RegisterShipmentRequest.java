package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest;

import java.util.List;

import lombok.Data;

@Data
public class RegisterShipmentRequest {
    private List<String> fishIds;
    private String toLocation;
    private String shipmentCompanyName;
}
