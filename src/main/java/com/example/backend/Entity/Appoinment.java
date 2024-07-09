
package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

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




//    ==========one customer can book only one appointment ===========
    @OneToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id", nullable = false)
    private Customer customer;
//    ================many booking center has one appointment=======
    @ManyToOne
    @JoinColumn(name = "center_id", referencedColumnName = "center_id", nullable = false)
    private BookingCenter bookingCenter;

    @ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "service_id", nullable = false)
    private Service service;

    @NotNull(message = "Appointment date is mandatory")
    @Column(name = "appointment_date", nullable = false)
    private String appointmentDate;

    @NotNull(message = "Status is mandatory")
    @Column(name = "status", nullable = false)
    private String status;

    @NotNull(message = "Payment first")
    @Column(name = "Amount" , nullable = false)
    private Double paymentFirst;

    @Column(name = "payment type" ,nullable = true)
    private String paymentType;

}


