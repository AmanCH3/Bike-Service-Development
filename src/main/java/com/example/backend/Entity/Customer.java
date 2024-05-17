package com.example.backend.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

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

    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    @Column(name = "email", nullable = false)
    private String email;

    @NotBlank(message = "Address is mandatory")
    @Size(max = 255, message = "Address cannot be longer than 255 characters")
    @Column(name = "address", nullable = false)
    private String address;


    public Customer() {

    }
}




