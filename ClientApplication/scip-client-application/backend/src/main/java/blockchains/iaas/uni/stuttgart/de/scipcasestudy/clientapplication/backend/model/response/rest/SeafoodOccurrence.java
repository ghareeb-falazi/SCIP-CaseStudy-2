package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.SupplyChainAction;
import lombok.Data;

@Data
public class SeafoodOccurrence<T extends SupplyChainAction> {
    private String isoTimestamp;
    private T occurrence;
}
