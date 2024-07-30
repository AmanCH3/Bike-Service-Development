package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Entity
@Table(name = "booking_request")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {
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

    @NotNull(message = "Date is mandatory")
    @Column(name = "preferred_date", nullable = false)
    private String preferredDate;

    @NotNull(message = "Time is mandatory")
    @Column(name = "preferred_time", nullable = false)
    private String preferredTime;

    @Column(name = "comments", nullable = true)
    private String comments;
}
