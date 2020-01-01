package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request;

import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.TimeFrame;
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
}
