package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.scip;

import java.util.ArrayList;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScdlTypes;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.experimental.SuperBuilder;

@SuperBuilder
@Getter
public class InvocationRequestMessage extends AsyncScipRequestMessage {
    protected String functionIdentifier;
    protected List<Parameter> inputs;
    protected List<Parameter> outputs;
    protected double requiredConfidence;
    protected long timeout;
    protected String signature;

    @JsonIgnore
    public void addStringInputParameter(String name, String value) {
        if (this.inputs == null) {
            this.inputs = new ArrayList<>();
        }

        this.inputs.add(Parameter.builder().name(name).type(ScdlTypes.STRING).value(value).build());
    }

    @JsonIgnore
    public void addStringOutputParameter(String name) {
        if (this.outputs == null) {
            this.outputs = new ArrayList<>();
        }

        this.outputs.add(Parameter.builder().name(name).type(ScdlTypes.STRING).build());
    }
}
