package com.example.backend.Repository;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRespository extends JpaRepository<Service,Integer> {

    Service save(ServicePojo servicePojo);
}
