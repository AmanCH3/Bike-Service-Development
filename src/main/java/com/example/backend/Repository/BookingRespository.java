package com.example.backend.Repository;

import com.example.backend.Service.BookingService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRespository extends JpaRepository<BookingService, Integer> {

}
