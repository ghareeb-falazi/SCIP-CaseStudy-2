package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest;

import lombok.Data;

@Data
public class RegisterInInventoryRequest {
    private String packageId;
    private String retailerName;
}
