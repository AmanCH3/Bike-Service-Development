package com.example.backend.Repository;
import com.example.backend.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRespository extends JpaRepository<Admin,Integer> {
    Optional<Admin> findByEmail(String email);
}
