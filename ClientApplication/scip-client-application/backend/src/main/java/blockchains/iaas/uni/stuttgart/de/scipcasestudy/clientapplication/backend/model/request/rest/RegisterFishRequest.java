package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.request.rest;

import lombok.Data;

@Data
public class RegisterFishRequest {
    private String fishId;
    private String location;
    private String fishermanName;
}
