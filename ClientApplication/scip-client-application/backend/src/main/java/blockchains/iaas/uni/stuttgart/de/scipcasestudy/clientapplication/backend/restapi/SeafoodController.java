package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.restapi;

import java.util.ArrayList;
import java.util.List;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.Fish;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.FishPackage;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.FishShipment;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.InventoryEntry;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.PackageSelling;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.PackageTransportation;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest.SeafoodProvenance;
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
    @RequestMapping(value = "/seafood/fish", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerCapturedFish(Fish request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/fish", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Fish> getAllRegisteredFish() {
        return new ArrayList<>();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/shipment", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerShipment(FishShipment request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/shipment", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<FishShipment> getAllRegisteredShipments() {
        return new ArrayList<>();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/package", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerPackage(FishPackage request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/package", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<FishPackage> getAllRegisteredPackages() {
        return new ArrayList<>();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/transportation", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerTransportation(PackageTransportation request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/transportation", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PackageTransportation> getAllRegisteredTransportations() {
        return new ArrayList<>();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/inventory", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerInInventory(InventoryEntry request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/inventory", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<InventoryEntry> getAllPackagesRegisteredInInventories() {
        return new ArrayList<>();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/selling", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerSelling(PackageSelling request) {
        return "OK";
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/selling", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PackageSelling> getAllSoldPackages() {
        return new ArrayList<>();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/provenance", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public SeafoodProvenance retrieveProvenance(String packageId) {
        return new SeafoodProvenance();
    }
}
