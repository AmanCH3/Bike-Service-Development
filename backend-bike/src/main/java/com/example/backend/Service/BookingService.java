package com.example.backend.Service;

import com.example.backend.Entity.BookingCenter;
import com.example.backend.Pojo.BookingPojo;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    BookingCenter saveBook(BookingPojo bookingPojo);
    List<BookingCenter> getAllBookings();
    Optional<BookingCenter> getBookingById(int id);
    void deleteBooking(int id);
    BookingCenter UpdateBook(BookingPojo bookingPojo);
}
