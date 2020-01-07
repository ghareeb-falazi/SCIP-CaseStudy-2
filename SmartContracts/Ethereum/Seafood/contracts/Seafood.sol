pragma solidity >=0.4.21 <0.6.0;

/**
 * @title Seafood supplychain smart contract
 * @author Andrea Lamparelli
 * @notice This contract allows all seafood supply chain's involved actors to log their operations in a persistent way
 **/
contract Seafood {
    /************** Custom Structs **************/
    struct Fish {
        string location;
        string fishermanName;
    }
    
    struct Shipment {
        string toLocation;
        string shipmentCompanyName;
    }
    
    struct Package {
        string fishIds;
        string processingFacilityName;
    }
    
    struct Transport {
        string toLocation;
        string distributorName;
    }
    
    /************* State Variables **************/
    
    /* fishID => (location, fishermanName) */
    mapping (string => Fish) fishes;
    
    /* fishIds => (toLocation, shipmentCompanyName) */
    mapping (string => Shipment) shipments;
    
    /* packageId => (fishIds, processingFacilityName) */
    mapping (string => Package) packages;
    
    /* packageId => (toLocation, distributorName) */
    mapping (string => Transport) transports;
    
    /* packageId => retailerName */
    mapping (string => string) inventory;
    
    /* list of packageId */
    string[] sales;
    
    /****************** Events  ********************/
    
    /**
     * @notice Notify that a new fish has been registered
     **/
    event fishRegistered(string fishId, string location, string fishermanName);
    
    /**
     * @notice Notify that a new shipment has been registered
     **/
    event shipmentRegistered(string fishIds, string toLocation, string shipmentCompanyName);
    
    /**
     * @notice Notify that a new package has been registered
     **/
    event packageRegistered(string fishIds, string packageId, string processingFacilityName);
    
    /**
     * @notice Notify that a new package has been transported
     **/
    event packageTransported(string packageId, string toLocation, string distributorName);
    
    /**
     * @notice Notify that a new package has been registered in the inventory
     **/
    event packageRegisteredInInventory(string packageId, string retailerName);
    
    /**
     * @notice Notify that a new package has been sold
     **/
    event packageSold(string packageId);
    
    
    /*********** Registration Function  ************/
    
    /**
     * @notice Register a new fish inside the supply chain ecosystem
     * @param fishId is the fish unique identifier
     * @param location is the place from which the fish comes from
     * @param fishermanName is actor who caught the fish
     **/
    function registerFish(string memory fishId, string memory location, string memory fishermanName) public {
        fishes[fishId] = Fish(location, fishermanName);
        emit fishRegistered(fishId, location, fishermanName);
    }
    
    /**
     * @notice Register a new fishes' batch shipment
     * @param fishIds is a comma separated list of fishId
     * @param toLocation is the place where the batch has to be shipped
     * @param shipmentCompanyName name of the company in charge to ship the batch
     **/
    function registerShipment(string memory fishIds, string memory toLocation, string memory shipmentCompanyName) public{
        shipments[fishIds] = Shipment(toLocation, shipmentCompanyName);
        emit shipmentRegistered(fishIds, toLocation, shipmentCompanyName);
    }
    
    /**
     * @notice Register a new fishes' package
     * @param fishIds is a comma separated list of fishId
     * @param packageId is the unique package identifier
     * @param processingFacilityName name of the facility that has processed the package
     **/
    function registerPackage(string memory fishIds, string memory packageId, string memory processingFacilityName) public{
        packages[packageId] = Package(fishIds, processingFacilityName);
        emit packageRegistered(fishIds, packageId, processingFacilityName);
    }
    
    /**
     * @notice Register a new transportation
     * @param packageId is the identifier of the transported package
     * @param toLocation is the place where tha package was transported to
     * @param distributorName is the name of the company that transported the package
     **/
    function registerTransportation(string memory packageId, string memory toLocation, string memory distributorName) public{
        transports[packageId] = Transport(toLocation, distributorName);
        emit packageTransported(packageId, toLocation, distributorName);
    }
    
    /**
     * @notice Register a new package in the inventory
     * @param packageId is the unique identifier of the package
     * @param retailerName name of the retailer who will sell the package
     **/
    function registerInInventory(string memory packageId, string memory retailerName) public{
        inventory[packageId] = retailerName;
        emit packageRegisteredInInventory(packageId, retailerName);
    }
    
    /**
     * @notice Register that a package was sold
     * @param packageId is the identifier of the sold package
     **/
    function registerSelling(string memory packageId) public{
        sales.push(packageId);
        emit packageSold(packageId);
    }
}