package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest;

import lombok.Data;

@Data
public class RegisterTransportationRequest {
    private String packageId;
    private String toLocation;
    private String distributorName;
}
