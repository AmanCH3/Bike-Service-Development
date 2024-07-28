package com.example.backend.Entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "bike")
@Getter
@Setter
public class Bike  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "bike_id")
    private Long bikeId;


//    @OneToMany(mappedBy = "bike", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<BookingCenter> bookingCenter;

    @NotBlank(message = "Brand is mandatory")
    @Size(max = 100, message = "Brand cannot be longer than 100 characters")
    @Column(name = "brand", nullable = false)
    private String brand;

    @NotBlank(message = "Model is mandatory")
    @Size(max = 100, message = "Model cannot be longer than 100 characters")
    @Column(name = "model", nullable = false)
    private String model;

    @NotBlank(message = "Registration number is mandatory")
    @Size(max = 50, message = "Registration number cannot be longer than 50 characters")
    @Column(name = "registration_number", nullable = false, unique = true)
    private String registrationNumber;


}


