package com.example.backend.Service.impl;

import com.example.backend.Entity.Customer;
import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.ServiceService;
import lombok.RequiredArgsConstructor;

import java.util.List;


@org.springframework.stereotype.Service
@RequiredArgsConstructor
public class ServiceServiceImpl  implements ServiceService {

    private final ServiceRespository serviceRespository ;

    @Override
    public List<Customer> getAllServices() {
        return  serviceRespository.findAll() ;
    }

    @Override
    public Service getServiceById(int id) {
        return  serviceRespository.findById(id).get();

    }

    @Override
    public Service addService(ServicePojo servicePojo) {
        return serviceRespository.save(servicePojo);
    }

    public Service updateService(ServicePojo servicePojo) {
       Service service = new Service() ;
       service.setServiceId(service.getServiceId());
       service.setCost(service.getCost());
       service.setDescription(service.getServiceName());

       serviceRespository.save(service);

      return  service ;
    }

    @Override
    public void deleteService(int id) {

    }

}
