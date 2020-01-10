package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.scip;

import java.util.ArrayList;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.TimeFrame;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScdlTypes;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Setter
@Getter
@SuperBuilder
public class QueryRequestMessage extends ScipRequestMessage {
    protected String functionIdentifier;
    protected String eventIdentifier;
    protected String filter;
    protected List<Parameter> parameters;
    protected TimeFrame timeframe;

    @JsonIgnore
    public void addStringParameter(String paramName) {
        if (this.parameters == null) {
            this.parameters = new ArrayList<>();
        }

        this.parameters.add(Parameter.builder().name(paramName).type(ScdlTypes.STRING).build());
    }
}
