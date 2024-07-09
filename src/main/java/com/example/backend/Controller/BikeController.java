package com.example.backend.Controller;

import com.example.backend.Entity.Bike;
import com.example.backend.Pojo.BikePojo;
import com.example.backend.Pojo.CustomerPojo;
import com.example.backend.Service.BikeCenter;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bike")
@RequiredArgsConstructor
public class BikeController {

    private final BikeCenter bikeCenter;

    @GetMapping
    public GlobalApiResponse<List<Bike>> getAllBikes(BikePojo bikePojo) {
        List<Bike> bikes = this.bikeCenter.getAllBike(bikePojo);
        return GlobalApiResponse.<List<Bike>>builder()
                .data(bikes)
                .statusCode(200)
                .message("Data retrieved successfully")
                .build();
    }

    @PostMapping
    public GlobalApiResponse<Bike> createBike(@RequestBody BikePojo bikePojo) {
        CustomerPojo customerPojo = new CustomerPojo();
        Bike newBike = this.bikeCenter.saveOrUpdateBike(bikePojo);
        return GlobalApiResponse.<Bike>builder()
                .data(newBike)
                .statusCode(200)
                .message("Bike created successfully")
                .build();
    }


    @PutMapping("/{id}")
    public GlobalApiResponse<Bike> updateBike(@RequestBody BikePojo bikePojo, CustomerPojo customerPojo) {
        Bike updatedBike = this.bikeCenter.saveOrUpdateBike(bikePojo);
        return GlobalApiResponse.<Bike>builder()
                .data(updatedBike)
                .statusCode(200)
                .message("Bike updated successfully")
                .build();
    }

    @DeleteMapping("/{id}")
    public GlobalApiResponse<Bike> deleteBike(@PathVariable int id) {
        Bike deleteBike = this.bikeCenter.deleteBike(id);

        return GlobalApiResponse.<Bike>builder()
                .data(deleteBike)
                .message("Data has been delete"  + id + " ")
                .statusCode(200)
                .build() ;
    }

    @GetMapping("/{id}")
    public GlobalApiResponse<Bike> getBikeById(@PathVariable Long id) {
        Bike bike = this.bikeCenter.getBikeById(id);
        return GlobalApiResponse.<Bike>builder()
                .data(bike)
                .statusCode(200)
                .message("Bike retrieved successfully")
                .build();
    }
}
