package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.Parameter;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScdlTypes;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class FishPackage extends SupplyChainAction {
    private List<String> fishIds;
    private String packageId;
    private String processingFacilityName;

    public FishPackage(List<Parameter> parameters) {
        fishIds = parameters
                .stream()
                .filter(param -> param.getName().equals("fishIds"))
                .map(Parameter::getValue)
                .map(csv -> Arrays.asList(csv.split(",")))
                .findFirst()
                .orElse(null);

        packageId = parameters
                .stream()
                .filter(param -> param.getName().equals("packageId"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");

        processingFacilityName = parameters
                .stream()
                .filter(param -> param.getName().equals("processingFacilityName"))
                .map(Parameter::getValue)
                .findFirst()
                .orElse("");
    }

    @Override
    public List<Parameter> getAsParameters() {
        List<Parameter> result = new ArrayList<>();
        String paramValue = fishIds.stream().reduce((fishId1, fishId2) -> fishId1 + "," + fishId2).orElse("");
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("fishIds").value(paramValue).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("packageId").value(packageId).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("processingFacilityName").value(processingFacilityName).build());

        return result;
    }
}
