package com.example.backend.Entity;

import com.example.backend.enumType.UserType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.Collections;

@Entity
@Table(name = "customer")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor



public class Customer implements UserDetails {
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


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override
    public String getUsername() {
        return email; // Assuming email is the username
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Implement your logic for account expiration
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Implement your logic for account locking
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Implement your logic for credentials expiration
    }

    @Override
    public boolean isEnabled() {
        return true; // Implement your logic for account enabled/disabled
    }



    @PrePersist
    @PreUpdate
    private void hashPassword() {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        this.password = passwordEncoder.encode(this.password);
    }


}




