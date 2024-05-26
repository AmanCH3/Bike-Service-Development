package com.example.backend.Service;

import com.example.backend.Entity.Service;

import java.util.List;

public interface ServiceService {
    List<Service> getAllServices();
    Service getServiceById(int id);
    Service addService(Service service);
    Service updateService(Service service);
    void deleteService(int id);
}
