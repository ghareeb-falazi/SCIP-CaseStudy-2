package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.restapi;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest.RegisterFishRequest;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest.RegisterInInventoryRequest;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest.RegisterPackageRequest;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest.RegisterSellingRequest;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest.RegisterShipmentRequest;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest.RegisterTransportationRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SeafoodController {
    private static Logger log = LoggerFactory.getLogger(SeafoodController.class);
    private final String scl;
    private final String callbackUrl;

    public SeafoodController() {
        scl = UrlProvider.getInstance().getEmsBalUrl() + "/webapi?blockchain=fabric&blockchain-id=fabric-0&address=mychannel/seafood";
        callbackUrl = UrlProvider.getInstance().getCallbackUrl();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/fish", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public String registerCapturedFish(RegisterFishRequest request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/shipment", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public String registerShipment(RegisterShipmentRequest request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/package", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public String registerPackage(RegisterPackageRequest request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/transportation", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public String registerTransportation(RegisterTransportationRequest request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/inventory", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public String registerInInventory(RegisterInInventoryRequest request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/selling", method = RequestMethod.POST, produces = {MediaType.APPLICATION_JSON_VALUE})
    public String registerSelling(RegisterSellingRequest request) {
        return "OK";
    }
}
