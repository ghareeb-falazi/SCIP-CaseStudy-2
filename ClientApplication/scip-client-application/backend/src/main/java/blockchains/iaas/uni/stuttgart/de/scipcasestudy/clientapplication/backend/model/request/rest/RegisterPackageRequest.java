package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest;

import java.util.List;

import lombok.Data;

@Data
public class RegisterPackageRequest {
    private List<String> fishIds;
    private String packageId;
    private String processingFacilityName;
}
