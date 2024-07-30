package com.example.backend.Service.impl;

import com.example.backend.Entity.Bike;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.BikePojo;
import com.example.backend.Repository.BikeRepository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Service.BikeCenter;
import com.example.backend.exception.CustomException;
import com.example.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BikeServiceImpl implements BikeCenter {

    private final BikeRepository bikeRepository;
    private final CustomerRespository customerRespository;


    @Override
    public List<Bike> getAllBikes(BikePojo bikePojo) {
        return bikeRepository.findAll();
    }

    @Override
    public List<Bike> getAllBike(BikePojo bikePojo) {
        return bikeRepository.findAll();
    }

    @Override
    public Bike getBikeById(Long id) {
        return bikeRepository.findById(id.intValue())
                .orElseThrow(() -> new CustomException("Bike with id " + id + " not found"));
    }

    @Override
    public Bike deleteBike(int id) {
        if (!bikeRepository.existsById(id)) {
            throw new CustomException("Bike with id " + id + " not found");
        }
        bikeRepository.deleteById(id);
        return null;
    }

    @Override
    public Bike saveOrUpdateBike(BikePojo bikePojo) {
        var customer = customerRespository.findById((long) bikePojo.getCustomerId());
        if(customer.isEmpty()) {
            throw new CustomException("Customer with id " + bikePojo.getCustomerId() + " not found");
        }else {
            Customer customerData = customer.get();

            Bike bike = new Bike();
            bike.setBrand(bikePojo.getBrand());
            bike.setModel(bikePojo.getModel());
            bike.setRegistrationNumber(bikePojo.getRegistrationNumber());
            return bikeRepository.save(bike);
        }
    }

    @Override
    public Bike UpdateBike(long bikeId, BikePojo bikePojo) {
        return bikeRepository.findById(Math.toIntExact(bikeId)).map(existingBike -> {
            mapPojoToEntity(bikePojo, existingBike);
            return bikeRepository.save(existingBike);
        }).orElseThrow(() -> new ResourceNotFoundException("Bike not found with id " + bikeId));
    }



    @Override
    public List<Customer> getAllCustomers(Long customerId) {
        return customerRespository.findAll();
    }

    @Override
    public Page<Bike> getAllBikes(Pageable pageable) {
        return bikeRepository.findAll(pageable);
    }

    private void mapPojoToEntity(BikePojo bikePojo, Bike bike) {
        bike.setBrand(bikePojo.getBrand());
        bike.setModel(bikePojo.getModel());
        bike.setRegistrationNumber(bikePojo.getRegistrationNumber());
    }
}

