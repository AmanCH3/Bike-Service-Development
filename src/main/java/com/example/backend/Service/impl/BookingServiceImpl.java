package com.example.backend.Service.impl;

import com.example.backend.Entity.BookingCenter;
import com.example.backend.Pojo.BookingPojo;
import com.example.backend.Repository.BookingRespository;
import com.example.backend.Service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRespository bookingRespository;


    @Override
    public BookingCenter saveBook(BookingPojo bookingPojo) {
        BookingCenter bookingCenter = new BookingCenter();
        bookingCenter.setLocation(bookingPojo.getLocation());
        bookingCenter.setContactNumber(bookingPojo.getContactNumber());

         //  repository .....................
//       bookingRespository.save(bookingCenter) ;
        return bookingCenter ;
    }

    @Override
    public List<BookingCenter> getAllBookings() {
        return List.of();
    }

    @Override
    public BookingPojo getBookingById(int id) {
        return null;
    }

    @Override
    public void deleteBooking(int id) {

    }

    @Override
    public BookingCenter UpdateBook(BookingPojo bookingPojo) {
        return null;
    }
}
