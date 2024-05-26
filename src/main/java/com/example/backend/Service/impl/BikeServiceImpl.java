package com.example.backend.Service.impl;

import com.example.backend.Entity.Bike;
import com.example.backend.Pojo.BikePojo;
import com.example.backend.Repository.BikeRepository;
import com.example.backend.Service.BikeCenter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Repository
@Service
@RequiredArgsConstructor
public class BikeServiceImpl implements BikeCenter {

    private final BikeRepository bikeRepository ;

    @Override
    public List<Bike> saveBike(BikePojo bikePojo){
        Bike bike = new Bike() ;
        bike.setBrand(bikePojo.getBrand());
        bike.setModel(bikePojo.getModel());
        bike.setRegistrationNumber(bikePojo.getRegistrationNumber());



        bikeRepository.save(bike);
        return StreamSupport.stream(bikeRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }
    @Override
    public List<Bike> getAllBike(BikePojo bikePojo) {
        return bikeRepository.findAll() ;
    }

    @Override
    public Bike getBikeById(int id) {
        return bikeRepository.findById(id).get() ;
    }


    @Override
    public void deleteBike(int id) {
        bikeRepository.deleteById(id);


    }
}
