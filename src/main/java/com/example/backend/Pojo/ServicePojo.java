package com.example.backend.Pojo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ServicePojo {
    private String serviceName;
    private String serviceDescription;
    private double cost;
}
