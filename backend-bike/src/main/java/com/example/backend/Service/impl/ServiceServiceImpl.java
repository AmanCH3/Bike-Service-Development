package com.example.backend.Service.impl;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.ServiceService;
import com.example.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceServiceImpl implements ServiceService {
private final ServiceRespository serviceRespository ;

    @Override
    public List<Service> getAllServices() {
        return serviceRespository.findAll();
    }

    @Override
    public Optional<Service> getServiceById(Long id) {
        return serviceRespository.findById(id);
    }

    @Override
    public Service updateService(ServicePojo servicePojo) {
        Service service = new Service();
        service.setServiceId(service.getServiceId());
        service.setServiceName(servicePojo.getServiceName());
        service.setCost(servicePojo.getCost());
        service.setDescription(servicePojo.getServiceDescription());
        serviceRespository.save(service);
        return service;
    }

    @Override
    public void deleteService(Long id) {
        serviceRespository.deleteById(id);
    }

    public Service addService(Long serviceId ,ServicePojo servicePojo) {

        return serviceRespository.findById(serviceId).map(existingService-> {
            mapPojoToEntity(servicePojo, existingService);
            return serviceRespository.save(existingService);
        }).orElseThrow(() -> new ResourceNotFoundException("Admin not found with id " + serviceId));
    }

    private void mapPojoToEntity(ServicePojo servicePojo , Service service){
        service.setServiceName(servicePojo.getServiceName());
        service.setCost(servicePojo.getCost());
        service.setDescription(servicePojo.getServiceDescription());
        serviceRespository.save(service);
    }
}
