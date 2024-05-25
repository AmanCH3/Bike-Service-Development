package com.example.backend.Controller;


import com.example.backend.Entity.Bike;
import com.example.backend.Pojo.BikePojo;
import com.example.backend.Service.BikeCenter;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bike")
@RequiredArgsConstructor
public class BikeController {

    private final BikeCenter bikeCenter ;

    @GetMapping
    public GlobalApiResponse<List<Bike>> getBike(BikePojo bikePojo) {

        return  GlobalApiResponse.
                <List<Bike>>builder()
                .data(this.bikeCenter.getAllBike(bikePojo))
                .statusCode(200)
                .message("Data retrieved sucessfully")
                .build();


    }

    @PostMapping
    public GlobalApiResponse<List<Bike>> createBike(@RequestBody BikePojo bikePojo) {
        return GlobalApiResponse.
                <List<Bike>>builder()
                .data(this.bikeCenter.saveBike(bikePojo))
                .statusCode(200)
                .message("Data updated successfully")
                .build() ;
    }

    @PutMapping
    public GlobalApiResponse<Bike> update(@RequestBody BikePojo bikePojo) {
         Bike updateBike = (Bike) this.bikeCenter.saveBike(bikePojo);
        return GlobalApiResponse.<Bike>builder()
                .data(updateBike)
                .statusCode(200)
                .message("Data updated")
                .build() ;

    }

    @DeleteMapping("delete/{id}")
    public GlobalApiResponse<String> delete(@PathVariable int id) {
        this.bikeCenter.deleteBike(id);
        return GlobalApiResponse.<String>builder()
                .data("Bike with id "+ id +"has been deleted successfully")
                .statusCode(200)
                .message("Delete successufully")
                .build() ;

    }



}
