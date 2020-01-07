package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.SeafoodEvent;
import lombok.Data;

@Data
public class SeafoodOccurrence<T extends SeafoodEvent> {
    private String isoTimestamp;
    private T occurrence;
}
