package com.example.backend.Pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ServicePojo {
    private int serviceid;
    private String serviceName;
    private String serviceDescription;
    private double cost;
}
