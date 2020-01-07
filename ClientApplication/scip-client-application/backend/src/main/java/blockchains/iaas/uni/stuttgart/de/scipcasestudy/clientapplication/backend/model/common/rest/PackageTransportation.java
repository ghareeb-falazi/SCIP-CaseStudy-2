package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import lombok.Data;

@Data
public class PackageTransportation extends SeafoodEvent {
    private String packageId;
    private String toLocation;
    private String distributorName;
}
