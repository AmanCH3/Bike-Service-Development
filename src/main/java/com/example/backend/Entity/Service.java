package com.example.backend.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "service")
@Getter
@Setter
@AllArgsConstructor
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "service_id")
    private Long serviceId;

    @NotBlank(message = "Service name is mandatory")
    @Size(max = 100, message = "Service name cannot be longer than 100 characters")
    @Column(name = "service_name", nullable = false)
    private String serviceName;

    @Size(max = 255, message = "Description cannot be longer than 255 characters")
    @Column(name = "description")
    private String description;

    @NotNull(message = "Cost is mandatory")
    @Column(name = "cost")
    private double cost;


    public Service() {

    }
}
//User (1) ----------- (M) Vehicle
//User (1) ----------- (M) Order
//Order (1) ---------- (M) OrderService
//Service (1) -------- (M) OrderService
