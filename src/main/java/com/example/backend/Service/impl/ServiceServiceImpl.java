package com.example.backend.Service.impl;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.ServiceService;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;


@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceServiceImpl  implements ServiceService {

    private final ServiceRespository serviceRespository ;

    @Override
    public List<Service> getAllServices() {

        return  serviceRespository.findAll() ;
    }

    @Override
    public Optional<Service> getServiceById(Long id) {
        return  serviceRespository.findById(id);
    }

    public Service updateService(ServicePojo servicePojo) {
       Service service = new Service();
       service.setServiceName(servicePojo.getServiceName()) ;
       service.setCost(servicePojo.getCost());
       service.setDescription(servicePojo.getServiceName());
        serviceRespository.save(service);
       return service ;

    }

    @Override
    public void deleteService(Long id) {
        serviceRespository.deleteById(id);

    }

}
