package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common.rest;

import lombok.Data;

@Data
public class Fish extends SeafoodEvent {
    private String fishId;
    private String location;
    private String fishermanName;
}
