package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "order_services")
@Getter
@Setter
@AllArgsConstructor
public class OrderService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_service_id")
    private Long orderServiceId;

    @ManyToOne
    @JoinColumn(name = "center_id", referencedColumnName = "center_id", nullable = false)
    private BookingCenter bookingCenter;

    @ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "service_id", nullable = false)
    private Service service;

    public OrderService() {}
}
