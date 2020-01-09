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
public class PackageSelling extends SupplyChainAction {
    private String packageId;

    public PackageSelling(List<Parameter> parameters) {
        packageId = parameters
                .stream()
                .filter(param -> param.getName().equals("packageId"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");
    }

    @Override
    public List<Parameter> getAsParameters() {
        List<Parameter> result = new ArrayList<>();
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("packageId").value(packageId).build());

        return result;
    }
}
