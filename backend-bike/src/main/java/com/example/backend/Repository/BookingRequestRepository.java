package com.example.backend.Repository;

import com.example.backend.Entity.BookingRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRequestRepository extends JpaRepository<BookingRequest, Integer> {
}

