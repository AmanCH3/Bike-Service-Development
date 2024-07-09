package com.example.backend.Entity;

import com.example.backend.enumType.UserType;
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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "customer_setup_seq_gen")
    @SequenceGenerator(name="customer_setup_seq_gen" , sequenceName = "customer_setup_seq", allocationSize = 101)
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

    @Column(nullable = false)
    private String password ;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserType role = UserType.ADMIN;



//    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Bike> bike;

//    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<BookingCenter> bookingCenters;

    public Customer() {

    }
}




