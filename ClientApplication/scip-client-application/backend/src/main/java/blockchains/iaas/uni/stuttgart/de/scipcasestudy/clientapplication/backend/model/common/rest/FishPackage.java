package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
public class FishPackage extends SupplyChainAction {
    private List<String> fishIds;
    private String packageId;
    private String processingFacilityName;

    public FishPackage(List<Parameter> parameters) {
        fishIds = parameters
                .stream()
                .filter(param -> param.getName().equals("fishIds"))
                .map(Parameter::getValue)
                // see the inverse conversion below
                .map(csv -> Arrays
                        .stream(csv.split(","))
                        .map(fishId -> fishId.substring(fishId.indexOf(":") + 1, fishId.indexOf(".")))
                        .collect(Collectors.toList()))
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
        String paramValue = fishIds == null ? null : fishIds
                .stream()
                // we assume that fishIds do not contain the ":" nor "."
                .map(fishId -> String.format("id:%s.", fishId))
                .reduce((fishId1, fishId2) -> fishId1 + "," + fishId2)
                .orElse("");
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("fishIds").value(paramValue).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("packageId").value(packageId).build());
        result.add(Parameter.builder().type(ScdlTypes.STRING).name("processingFacilityName").value(processingFacilityName).build());

        return result;
    }
}
