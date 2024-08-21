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

import java.util.Collection;
import java.util.Collections;

@Entity
@Table(name = "Admin")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Admin implements UserDetails {
    @Id
    @SequenceGenerator(name = "Admin_credentials_seq_gen", sequenceName = "Admin_credentials_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "Admin_credentials_seq_gen", strategy = GenerationType.SEQUENCE)
    private Long adminID;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private Integer phone;

    @Column(nullable = false, unique = true)
    private Integer username;

    @Column(nullable = false)
    private String password;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private UserType role = UserType.ADMIN;

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