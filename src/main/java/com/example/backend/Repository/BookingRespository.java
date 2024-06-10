package com.example.backend.Repository;

import com.example.backend.Entity.BookingCenter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRespository extends JpaRepository<BookingCenter,Integer> {
}
