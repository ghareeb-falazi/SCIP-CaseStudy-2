package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils;

import java.util.Collections;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.TimeFrame;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.SupplyChainAction;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.scip.InvocationRequestMessage;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.scip.QueryRequestMessage;
import org.apache.commons.lang3.RandomStringUtils;

public class ScipHelper {

    public static InvocationRequestMessage createVoidInvocationMessage(String callbackUrl, String functionId, SupplyChainAction action) {
        return InvocationRequestMessage.builder()
                .inputs(action.getAsParameters())
                .outputs(Collections.emptyList())
                .functionIdentifier(functionId)
                .callbackUrl(callbackUrl)
                .correlationIdentifier(action.getClass().getSimpleName().concat("_").concat(RandomStringUtils.random(10, true, true)))
                .signature("")
                .build();
    }

    public static QueryRequestMessage createQueryMessage(String callbackUrl, String eventId, SupplyChainAction action, String filter, TimeFrame timeFrame) {
        return QueryRequestMessage.builder()
                .eventIdentifier(eventId)
                .filter(filter)
                .timeframe(timeFrame)
                .parameters(action.getAsParameters())
                .build();
    }
}
