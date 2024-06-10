package com.example.backend.Service;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;

import java.util.List;

public interface ServiceService {
    List<Service> getAllServices();

    Service getServiceById(int id);

    Service addService(ServicePojo servicePojo);

    Service updateService(ServicePojo servicePojo);

    void deleteService(int id);
}


