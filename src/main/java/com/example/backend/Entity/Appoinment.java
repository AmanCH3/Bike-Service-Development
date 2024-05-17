package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Table(name = "appoinment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Appoinment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id")
    private Long appointmentId;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "center_id", referencedColumnName = "center_id", nullable = false)
    private BookingCenter bookingCenter;

    @ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "service_id", nullable = false)
    private Service service;

    @NotNull(message = "Appointment date is mandatory")
    @Column(name = "appointment_date", nullable = false)
    private Date appointmentDate;

    @NotNull(message = "Status is mandatory")
    @Column(name = "status", nullable = false)
    private String status;

}


