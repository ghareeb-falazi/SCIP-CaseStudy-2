package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response;

import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class SubscribeResponse extends AbstractScipResponse {
    protected List<Parameter> parameters;
    protected String isoTimestamp;
}
