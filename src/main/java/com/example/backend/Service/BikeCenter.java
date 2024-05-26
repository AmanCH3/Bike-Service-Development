package com.example.backend.Service;

import com.example.backend.Entity.Bike;
import com.example.backend.Pojo.BikePojo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BikeCenter {

    List<Bike> getAllBike(BikePojo bikePojo);
    Bike getBikeById(int id);

    List<Bike> saveBike(BikePojo bikePojo);
    void deleteBike(int id);


}
