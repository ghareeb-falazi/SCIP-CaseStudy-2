package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.io.Serializable;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest.SeafoodOccurrence;
import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class SupplyChainAction implements Serializable {
    @JsonIgnore
    public abstract List<Parameter> getAsParameters();
}
