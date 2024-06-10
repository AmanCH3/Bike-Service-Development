package com.example.backend.Service.impl;

import com.example.backend.Entity.Bike;
import com.example.backend.Pojo.BikePojo;
import com.example.backend.Repository.BikeRepository;
import com.example.backend.Service.BikeCenter;
import com.example.backend.exception.CustomException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BikeServiceImpl implements BikeCenter {

    private final BikeRepository bikeRepository;

    @Override
    public Bike saveOrUpdateBike(int id, BikePojo bikePojo) {
        Bike bike = new Bike();

        bike.setBrand(bikePojo.getBrand());
        bike.setModel(bikePojo.getModel());
        bike.setRegistrationNumber(bikePojo.getRegistrationNumber());

        return bikeRepository.save(bike);
    }

    @Override
    public List<Bike> getAllBikes(BikePojo bikePojo) {
        return bikeRepository.findAll();
    }

    @Override
    public List<Bike> getAllBike(BikePojo bikePojo) {
        return List.of();
    }

    @Override
    public Bike getBikeById(int id) {
        return bikeRepository.findById(id)
                .orElseThrow(() -> new CustomException("Bike with id " + id + " not found"));
    }

    @Override
    public Bike saveBike(BikePojo bikePojo) {
        return null;
    }

    @Override
    public void deleteBike(int id) {
        if (!bikeRepository.existsById(id)) {
            throw new CustomException("Bike with id " + id + " not found");
        }
        bikeRepository.deleteById(id);
    }
}
