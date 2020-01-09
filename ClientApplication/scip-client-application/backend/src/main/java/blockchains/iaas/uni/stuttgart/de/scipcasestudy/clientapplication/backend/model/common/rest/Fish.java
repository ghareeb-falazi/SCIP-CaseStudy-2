package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.ArrayList;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScdlTypes;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Fish extends SupplyChainAction {
    private String fishId;
    private String location;
    private String fishermanName;

    public Fish(List<Parameter> parameters) {
        fishId = parameters
                .stream()
                .filter(param -> param.getName().equals("fishId"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        location = parameters
                .stream()
                .filter(param -> param.getName().equals("location"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        fishermanName = parameters
                .stream()
                .filter(param -> param.getName().equals("fishermanName"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");
    }

    @Override
    public List<Parameter> getAsParameters() {
        List<Parameter> result = new ArrayList<>();
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("fishId").value(fishId).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("location").value(location).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("fishermanName").value(fishermanName).build());

        return result;
    }
}
