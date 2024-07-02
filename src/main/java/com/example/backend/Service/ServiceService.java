package com.example.backend.Service;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;

import java.util.List;
import java.util.Optional;

public interface ServiceService {
    List<Service> getAllServices();

    Optional<Service> getServiceById(Long id);


    Service updateService(ServicePojo servicePojo);

    void deleteService(Long id);
}


