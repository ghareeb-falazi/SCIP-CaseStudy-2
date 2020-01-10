package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.restapi.controllers;

import java.util.ArrayList;
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
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest.SeafoodOccurrence;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.rest.SeafoodProvenance;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.response.scip.QueryResponse;
import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.restapi.SclProvider;
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
        scl = SclProvider.getInstance().getSeafoodScl();
        callbackUrl = SclProvider.getInstance().getCallbackUrl();
    }

    @CrossOrigin
    @RequestMapping(value = "/seafood/fish", method = RequestMethod.POST, consumes = {MediaType.APPLICATION_JSON_VALUE})
    public String registerCapturedFish(@RequestBody Fish request) {
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
    public String registerShipment(@RequestBody FishShipment request) {
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
    public String registerPackage(@RequestBody FishPackage request) {
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
    public String registerTransportation(@RequestBody PackageTransportation request) {
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
    public String registerInInventory(@RequestBody InventoryEntry request) {
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
    public SeafoodProvenance retrieveProvenance(@RequestBody String packageId) {
        SeafoodProvenance result = new SeafoodProvenance();
        String filter = String.format("packageId === '%s'", packageId);

        // first we query if the package is sold
        QueryResponse response = performQuery("packageSold", new PackageSelling(), filter);
        String currentTimestamp;

        if (response.getOccurrences() != null && response.getOccurrences().size() > 0) {
            PackageSelling selling = new PackageSelling(response.getOccurrences().get(0).getParameters());
            currentTimestamp = response.getOccurrences().get(0).getIsoTimestamp();
            result.setSellingOccurrence(new SeafoodOccurrence<>(currentTimestamp, selling));
        }

        // next, we query the inventory entry
        response = performQuery("packageRegisteredInInventory", new InventoryEntry(), filter);

        if (response.getOccurrences() != null && response.getOccurrences().size() > 0) {
            InventoryEntry inventoryEntry = new InventoryEntry(response.getOccurrences().get(0).getParameters());
            currentTimestamp = response.getOccurrences().get(0).getIsoTimestamp();
            result.setInventoryOccurrence(new SeafoodOccurrence<>(currentTimestamp, inventoryEntry));
        }

        // next, we query the distribution of the package
        response = performQuery("packageTransported", new PackageTransportation(), filter);

        if (response.getOccurrences() != null && response.getOccurrences().size() > 0) {
            PackageTransportation transportation = new PackageTransportation(response.getOccurrences().get(0).getParameters());
            currentTimestamp = response.getOccurrences().get(0).getIsoTimestamp();
            result.setTransportationOccurrence(new SeafoodOccurrence<>(currentTimestamp, transportation));
        }

        // next, we query the packaging process
        response = performQuery("packageRegistered", new FishPackage(), filter);

        if (response.getOccurrences() != null && response.getOccurrences().size() > 0) {
            FishPackage fishPackage = new FishPackage(response.getOccurrences().get(0).getParameters());
            currentTimestamp = response.getOccurrences().get(0).getIsoTimestamp();
            result.setPackagingOccurrence(new SeafoodOccurrence<>(currentTimestamp, fishPackage));
            List<String> fishIds = fishPackage.getFishIds();
            final List<SeafoodOccurrence<FishShipment>> shipments = new ArrayList<>();
            final List<SeafoodOccurrence<Fish>> fishes = new ArrayList<>();
            result.setFishShipmentOccurrences(shipments);
            result.setFishCatchingOccurrences(fishes);

            // for each fish id, we check shipments and catching events
            fishIds.forEach(fishId -> {
                // detect if a shipment contains the current fish id
                String shipmentFilter = String.format("RegExp('id:%s\\.').test(fishIds)", fishId);
                QueryResponse shipmentQueryResponse = performQuery("shipmentRegistered", new FishShipment(), shipmentFilter);

                if (shipmentQueryResponse.getOccurrences() != null && shipmentQueryResponse.getOccurrences().size() > 0) {
                    FishShipment currentShipment = new FishShipment(shipmentQueryResponse.getOccurrences().get(0).getParameters());
                    String currentShipmentTimestamp = shipmentQueryResponse.getOccurrences().get(0).getIsoTimestamp();
                    SeafoodOccurrence<FishShipment> currentOccurrence = new SeafoodOccurrence<>(currentShipmentTimestamp, currentShipment);

                    // add the detected shipment only if it is not added before.
                    if (!shipments.contains(currentOccurrence)) {
                        shipments.add(currentOccurrence);
                    }
                }
            });

            fishIds.forEach(fishId -> {
                String fishFilter = String.format("fishId === '%s'", fishId);
                QueryResponse fishQueryResponse = this.performQuery("fishRegistered", new Fish(), fishFilter);

                if (fishQueryResponse.getOccurrences() != null && fishQueryResponse.getOccurrences().size() > 0) {
                    Fish currentFish = new Fish(fishQueryResponse.getOccurrences().get(0).getParameters());
                    String currentFishTimestamp = fishQueryResponse.getOccurrences().get(0).getIsoTimestamp();
                    SeafoodOccurrence<Fish> currentFishOccurrence = new SeafoodOccurrence<>(currentFishTimestamp, currentFish);

                    if (!fishes.contains(currentFishOccurrence)) {
                        fishes.add(currentFishOccurrence);
                    }
                }
            });
        }

        return result;
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
