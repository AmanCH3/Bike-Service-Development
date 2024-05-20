package com.example.backend.Repository;

import com.example.backend.Entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRespository extends JpaRepository<Customer,Integer> {
}
