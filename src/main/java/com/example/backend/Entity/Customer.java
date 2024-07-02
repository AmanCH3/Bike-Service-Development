package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

@Entity
@Table(name = "customer")
@Getter
@Setter
@AllArgsConstructor


public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "customer_id")
    private Long customerId;

    @NotBlank(message = "Name is mandatory")
    @Size(max = 100, message = "Name cannot be longer than 100 characters")
    @Column(name = "name", nullable = false)
    private String name;

    @NotBlank(message = "Contact number is mandatory")
    @Pattern(regexp = "^\\+?[0-9. ()-]{7,25}$", message = "Invalid contact number")
    @Column(name = "contact_number", nullable = false)
    private String contactNumber;

    @NotBlank(message = "Password is mandatory")
    @Size(max = 100, message = "Password cannot be longer than 100 characters")
    @Column(name = "password", nullable = false)
    private String password;

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "Address is mandatory")
    @Size(max = 255, message = "Address cannot be longer than 255 characters")
    @Column(name = "address", nullable = false)
    private String address;

    @NotBlank(message = "Role is mandatory")
    @Column(name = "role", nullable = false)
    private String role; // admin and customer and switch the things accordingly


    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Bike> bike;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookingCenter> bookingCenters;


    public Customer() {

    }
}




