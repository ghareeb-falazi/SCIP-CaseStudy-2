package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.ArrayList;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScdlTypes;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PackageTransportation extends SupplyChainAction {
    private String packageId;
    private String toLocation;
    private String distributorName;

    public PackageTransportation(List<Parameter> parameters) {
        packageId = parameters
                .stream()
                .filter(param -> param.getName().equals("packageId"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        toLocation = parameters
                .stream()
                .filter(param -> param.getName().equals("toLocation"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        distributorName = parameters
                .stream()
                .filter(param -> param.getName().equals("distributorName"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");
    }

    @Override
    public List<Parameter> getAsParameters() {
        List<Parameter> result = new ArrayList<>();
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("packageId").value(packageId).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("toLocation").value(toLocation).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("distributorName").value(distributorName).build());

        return result;
    }
}
