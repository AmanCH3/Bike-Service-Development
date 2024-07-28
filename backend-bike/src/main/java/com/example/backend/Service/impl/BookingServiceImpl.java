package com.example.backend.Service.impl;

import com.example.backend.Entity.Bike;
import com.example.backend.Entity.BookingCenter;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.BookingPojo;
import com.example.backend.Repository.BikeRepository;
import com.example.backend.Repository.BookingRespository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Service.BookingService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final BookingRespository bookingRespository;

    private final CustomerRespository customerRespository ;
    private final BikeRepository bikeRepository ;


    @Override
    public BookingCenter saveBook(BookingPojo bookingPojo) {
      Bike bike = bikeRepository.findById(bookingPojo.getBikeId())
                .orElseThrow(() -> new RuntimeException("Bike not found"));
        Customer customer = customerRespository.findById((long) bookingPojo.getCustomerId())
                .orElseThrow(() -> new RuntimeException("Customer not found"));
        BookingCenter bookingCenter = new BookingCenter();
        bookingCenter.setBike(bike);
        bookingCenter.setCustomer(customer);
        bookingCenter.setLocation(bookingPojo.getLocation());
        bookingCenter.setContactNumber(bookingPojo.getContactNumber());

        return bookingRespository.save(bookingCenter);
    }

    @Override
    public List<BookingCenter> getAllBookings() {
        return List.of();
    }

    @Override
    public Optional<BookingCenter> getBookingById(int id) {

        return bookingRespository.findById(id);
    }

    @Override
    public void deleteBooking(int id) {

    }

    @Override
    public BookingCenter UpdateBook(BookingPojo bookingPojo) {
        return null;
    }
}
