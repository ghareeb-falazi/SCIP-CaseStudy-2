package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.List;

import lombok.Data;

@Data
public class FishPackage extends SeafoodEvent {
    private List<String> fishIds;
    private String packageId;
    private String processingFacilityName;
}
