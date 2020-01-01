package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.scipclient.response;

import java.util.List;

import lombok.Getter;
import lombok.experimental.SuperBuilder;

@Getter
@SuperBuilder
public class InvokeResponse extends AbstractScipResponse {
    protected List<Parameter> parameters;
}
