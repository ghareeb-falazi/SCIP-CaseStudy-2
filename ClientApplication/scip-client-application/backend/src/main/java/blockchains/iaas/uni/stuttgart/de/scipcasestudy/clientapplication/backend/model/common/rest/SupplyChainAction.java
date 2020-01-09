package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import com.fasterxml.jackson.annotation.JsonIgnore;

public abstract class SupplyChainAction implements Serializable {
    @JsonIgnore
    public abstract List<Parameter> getAsParameters();
}
