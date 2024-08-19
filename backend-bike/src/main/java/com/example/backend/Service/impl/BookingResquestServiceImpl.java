package com.example.backend.Service.impl;

import com.example.backend.Entity.BookingRequest;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.BookingRequestPojo;
import com.example.backend.Repository.BikeRepository;
import com.example.backend.Repository.BookingRequestRepository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.BookingRequestService;
import com.example.backend.Service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Repository
@RequiredArgsConstructor
class BookingResquestServiceImpl implements BookingRequestService {

    private final BookingRequestRepository bookingRequestRepository;
    private final CustomerRespository customerRespository;
    private final ServiceRespository serviceRespository;

    @Override
    public BookingRequest addBookingRequest(BookingRequestPojo bookingRequestPojo) {
        BookingRequest bookingRequest1 = new BookingRequest();

        Optional<Customer> customer = customerRespository.findById(bookingRequestPojo.getCustomerId());
        Optional<com.example.backend.Entity.Service> service = serviceRespository.findById(bookingRequestPojo.getServiceId());

        if (customer.isPresent() && service.isPresent()) {
            bookingRequest1.setCustomer(customer.get());
            bookingRequest1.setService(service.get());
        } else {
            // Handle the case where customer or service is missing
            if (!customer.isPresent()) {
                System.out.println("Customer not found with ID: " + bookingRequestPojo.getCustomerId());
            }
            if (!service.isPresent()) {
                System.out.println("Service not found with ID: " + bookingRequestPojo.getServiceId());
            }
            // You may choose to throw an exception here or set default values
            throw new RuntimeException("Customer not found with ID: " + bookingRequestPojo.getCustomerId());
        }

        // Set other fields regardless of whether customer and service are found
        bookingRequest1.setPreferredDate(bookingRequestPojo.getPreferredDate());
        bookingRequest1.setLocation(bookingRequestPojo.getLocation());
        bookingRequest1.setPayment(bookingRequestPojo.getPayment());

        return bookingRequestRepository.save(bookingRequest1);
    }

    @Override
    public List<BookingRequest> getAllBookingRequests() {
        return bookingRequestRepository.findAll();
    }

    @Override
    public BookingRequest getBookingRequestById(int id) {
        return bookingRequestRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteBookingRequestById(int id) {
        bookingRequestRepository.deleteById(id);
    }
}