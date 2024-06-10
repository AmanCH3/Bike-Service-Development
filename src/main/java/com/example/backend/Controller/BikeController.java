package com.example.backend.Controller;

import com.example.backend.Entity.Bike;
import com.example.backend.Pojo.BikePojo;
import com.example.backend.Service.BikeCenter;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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
                .statusCode(HttpStatus.OK.value())
                .message("Data retrieved successfully")
                .build();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public GlobalApiResponse<Bike> createBike(@RequestBody BikePojo bikePojo) {
        Bike newBike = this.bikeCenter.saveBike(bikePojo);
        return GlobalApiResponse.<Bike>builder()
                .data(newBike)
                .statusCode(HttpStatus.CREATED.value())
                .message("Bike created successfully")
                .build();
    }

    @PutMapping("/{id}")
    public GlobalApiResponse<Bike> updateBike(@PathVariable int id, @RequestBody BikePojo bikePojo) {
        Bike updatedBike = this.bikeCenter.saveOrUpdateBike(id, bikePojo);
        return GlobalApiResponse.<Bike>builder()
                .data(updatedBike)
                .statusCode(HttpStatus.OK.value())
                .message("Bike updated successfully")
                .build();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBike(@PathVariable int id) {
        this.bikeCenter.deleteBike(id);
    }

    @GetMapping("/{id}")
    public GlobalApiResponse<Bike> getBikeById(@PathVariable int id) {
        Bike bike = this.bikeCenter.getBikeById(id);
        return GlobalApiResponse.<Bike>builder()
                .data(bike)
                .statusCode(HttpStatus.OK.value())
                .message("Bike retrieved successfully")
                .build();
    }
}
