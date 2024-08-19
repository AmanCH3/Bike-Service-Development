package com.example.backend.Repository;

import com.example.backend.Entity.Customer;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
@Configuration

public interface CustomerRespository extends JpaRepository<Customer,Long> {
    Optional<Customer> findByEmail(String email);
}
