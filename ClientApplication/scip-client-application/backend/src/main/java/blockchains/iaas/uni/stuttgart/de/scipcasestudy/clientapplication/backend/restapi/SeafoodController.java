package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.restapi;

import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.Fish;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.FishPackage;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.FishShipment;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.InventoryEntry;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.PackageSelling;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.PackageTransportation;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest.SupplyChainAction;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.scip.InvocationRequestMessage;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.scip.QueryRequestMessage;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.QueryResponse;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest.SeafoodProvenance;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.scipclient.ScipClient;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.ScipHelper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class SeafoodController {
    private static Logger log = LoggerFactory.getLogger(SeafoodController.class);
    private final String scl;
    private final String callbackUrl;

    public SeafoodController() {
        // todo set to the production address!
        scl = UrlProvider.getInstance().getSeafoodBalUrl() + "/webapi?blockchain=ethereum&blockchain-id=eth-0&address=0xEfA31950097772ceE947d0Ce67927b375997220e";
        callbackUrl = UrlProvider.getInstance().getCallbackUrl();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/fish", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerCapturedFish(Fish request) {
        return this.performScipInvocation("registerFish", request);
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/fish", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<Fish> getAllRegisteredFish() {
        QueryResponse response = this.performQuery("fishRegistered", new Fish(), "");
        return response
                .getOccurrences()
                .stream()
                .map(occurrence -> new Fish(occurrence.getParameters()))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/shipment", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerShipment(FishShipment request) {
        return this.performScipInvocation("registerShipment", request);
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/shipment", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<FishShipment> getAllRegisteredShipments() {
        QueryResponse response = this.performQuery("shipmentRegistered", new FishShipment(), "");
        return response
                .getOccurrences()
                .stream()
                .map(occurrence -> new FishShipment(occurrence.getParameters()))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/package", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerPackage(FishPackage request) {
        return this.performScipInvocation("registerPackage", request);
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/package", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<FishPackage> getAllRegisteredPackages() {
        QueryResponse response = this.performQuery("packageRegistered", new FishPackage(), "");
        return response
                .getOccurrences()
                .stream()
                .map(occurrence -> new FishPackage(occurrence.getParameters()))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/transportation", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerTransportation(PackageTransportation request) {
        return this.performScipInvocation("registerTransportation", request);
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/transportation", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PackageTransportation> getAllRegisteredTransportations() {
        QueryResponse response = this.performQuery("packageTransported", new PackageTransportation(), "");
        return response
                .getOccurrences()
                .stream()
                .map(occurrence -> new PackageTransportation(occurrence.getParameters()))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/inventory", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerInInventory(InventoryEntry request) {
        return this.performScipInvocation("registerInInventory", request);
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/inventory", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<InventoryEntry> getAllPackagesRegisteredInInventories() {
        QueryResponse response = this.performQuery("packageRegisteredInInventory", new InventoryEntry(), "");
        return response
                .getOccurrences()
                .stream()
                .map(occurrence -> new InventoryEntry(occurrence.getParameters()))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/selling", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerSelling(@RequestBody PackageSelling request) {
        return this.performScipInvocation("registerSelling", request);
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/selling", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public List<PackageSelling> getAllSoldPackages() {
        QueryResponse response = this.performQuery("packageSold", new PackageSelling(), "");
        return response
                .getOccurrences()
                .stream()
                .map(occurrence -> new PackageSelling(occurrence.getParameters()))
                .collect(Collectors.toList());
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/provenance", method = RequestMethod.GET, produces = {MediaType.APPLICATION_JSON_VALUE})
    public SeafoodProvenance retrieveProvenance(String packageId) {
        return new SeafoodProvenance();
    }

    private String performScipInvocation(String functionId, SupplyChainAction action) {
        try {
            InvocationRequestMessage msg = ScipHelper.createVoidInvocationMessage(callbackUrl, functionId, action);
            ScipClient.getInstance().invoke(scl, msg).get();
            return "OK";
        } catch (InterruptedException | ExecutionException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }

    private QueryResponse performQuery(String eventId, SupplyChainAction emptyAction, String filter) {
        try {
            QueryRequestMessage msg = ScipHelper.createQueryMessage(callbackUrl, eventId, emptyAction, filter, null);
            return ScipClient.getInstance().query(scl, msg).get();
        } catch (InterruptedException | ExecutionException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage());
        }
    }
}
