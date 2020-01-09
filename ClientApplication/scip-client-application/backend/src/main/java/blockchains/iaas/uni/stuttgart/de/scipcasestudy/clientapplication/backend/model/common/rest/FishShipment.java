package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.ArrayList;
import java.util.Arrays;
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
public class FishShipment extends SupplyChainAction {
    private List<String> fishIds = null;
    private String toLocation;
    private String shipmentCompanyName;

    public FishShipment(List<Parameter> parameters) {
        fishIds = parameters
                .stream()
                .filter(param -> param.getName().equals("fishIds"))
                .map(Parameter::getValue)
                .map(csv -> Arrays.asList(csv.split(",")))
                .findFirst()
                .orElse(null);

        toLocation = parameters
                .stream()
                .filter(param -> param.getName().equals("toLocation"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        shipmentCompanyName = parameters
                .stream()
                .filter(param -> param.getName().equals("shipmentCompanyName"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");
    }

    @Override
    public List<Parameter> getAsParameters() {
        List<Parameter> result = new ArrayList<>();
        String paramValue = fishIds == null ? "" : fishIds.stream().reduce((fishId1, fishId2) -> fishId1 + "," + fishId2).orElse("");
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("fishIds").value(paramValue).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("toLocation").value(toLocation).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("shipmentCompanyName").value(shipmentCompanyName).build());

        return result;
    }
}
