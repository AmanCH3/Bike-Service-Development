package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "booking_center")
@Getter
@Setter
@AllArgsConstructor
public class BookingCenter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "center_id")
    private Long centerId;

    @NotBlank(message = "Location is mandatory")
    @Size(max = 255, message = "Location cannot be longer than 255 characters")
    @Column(name = "location", nullable = false)
    private String location;

    @NotBlank(message = "Contact number is mandatory")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$", message = "Invalid contact number")
    @Column(name = "contact_number", nullable = false)
    private String contactNumber;

    @NotNull(message = "Order date is mandatory")
    @Column(name = "book_date", nullable = false)
    private LocalDate book_Date;

    @NotBlank(message = "Order status is mandatory")
    @Column(name = "book_status", nullable = false)
    private String book_Status;

    @ManyToOne
    @JoinColumn(name = "bike_id", referencedColumnName = "bike_id", nullable = false)
    private Bike bike;


    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "customer_id", nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "booking_center", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<OrderService> orderServices;


    // Default constructor
    public BookingCenter() {
    }
}
