/*******************************************************************************
 * Copyright (c) 2019 Institute for the Architecture of Application System - University of Stuttgart
 * Author: Ghareeb Falazi
 *
 * This program and the accompanying materials are made available under the
 * terms the Apache Software License 2.0
 * which is available at https://www.apache.org/licenses/LICENSE-2.0.
 *
 * SPDX-License-Identifier: Apache-2.0
 *******************************************************************************/

package blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.model.common;

import java.time.LocalDateTime;

import blockchains.iaas.uni.stuttgart.de.scipcasestudy.clientapplication.backend.utils.TimeUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Builder
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TimeFrame {
    private String from;
    private String to;

    @JsonIgnore
    public LocalDateTime getFromLocalDateTime() {
        return TimeUtils.getTimestampObject(from);
    }

    @JsonIgnore
    public LocalDateTime getToLocalDateTime() {
        return TimeUtils.getTimestampObject(to);
    }
}
