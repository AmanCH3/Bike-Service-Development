package com.example.backend.Service;

import com.example.backend.Entity.Bike;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.BikePojo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BikeCenter {


    List<Bike> getAllBikes(BikePojo bikePojo);

    List<Bike> getAllBike(BikePojo bikePojo);

    Bike getBikeById(Long id);


    Bike deleteBike(int id);

    Bike saveOrUpdateBike(BikePojo bikePojo);

    Bike UpdateBike(long bikeId, BikePojo bikePojo);

    List<Customer> getAllCustomers(Long customerId);

    //    ==============pagination ===========
    Page<Bike> getAllBikes(Pageable pageable);
}