package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name = "appointment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Appoinment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id")
    private Long appointmentId;

    // One customer can book only one appointment
    @OneToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id", nullable = false)
    private Customer customer;

    // Many booking centers have one appointment
    @ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "service_id", nullable = false)
    private Service service;

    @NotNull(message = "Appointment date is mandatory")
    @Column(name = "appointment_date", nullable = false)
    private String appointmentDate;

    @Column(name = "status", nullable = true)
    private String status;

    @OneToOne
    @JoinColumn(name = "bike_id", referencedColumnName = "bike_id", nullable = false)
    private Bike bike;
}
