package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

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

    @NotNull(message = "Status is mandatory")
    @Column(name = "status", nullable = false)
    private String status;

    @NotNull(message = "Payment first is mandatory")
    @Column(name = "payment_first", nullable = false)
    private Double paymentFirst;

    @Column(name = "payment_type", nullable = true)
    private String paymentType;
}
