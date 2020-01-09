package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.ArrayList;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScdlTypes;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class InventoryEntry extends SupplyChainAction {
    private String packageId;
    private String retailerName;

    public InventoryEntry(List<Parameter> parameters) {
        packageId = parameters
                .stream()
                .filter(param -> param.getName().equals("packageId"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        retailerName = parameters
                .stream()
                .filter(param -> param.getName().equals("retailerName"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");
    }

    @Override
    public List<Parameter> getAsParameters() {
        List<Parameter> result = new ArrayList<>();
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("packageId").value(packageId).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("retailerName").value(retailerName).build());

        return result;
    }
}
