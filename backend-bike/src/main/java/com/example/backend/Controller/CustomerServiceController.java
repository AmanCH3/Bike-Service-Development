package com.example.backend.Controller;

import com.example.backend.Entity.BookingRequest;
import com.example.backend.Entity.Customer;
import com.example.backend.Entity.Service;
import com.example.backend.Pojo.BookingRequestPojo;
import com.example.backend.Pojo.BookingRequestPojo;
import com.example.backend.Repository.BookingRequestRepository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Repository.ServiceRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ride")
@RequiredArgsConstructor
public class CustomerServiceController {

    private final CustomerRespository customerRespository;
    private final BookingRequestRepository bookingRequestRepository;
    private final ServiceRespository serviceRespository;

    @GetMapping
    public ResponseEntity<List<BookingRequest>> getAll() {
        List<BookingRequest> bookingRequests = bookingRequestRepository.findAll();
        return ResponseEntity.ok(bookingRequests) ;
    }

    @PostMapping
    public ResponseEntity<String> bookService(@RequestBody BookingRequestPojo bookingRequestPojo) {
        // Fetch customer and service by IDs
        Optional<Customer> customer = customerRespository.findById(bookingRequestPojo.getCustomerId());
        Optional<com.example.backend.Entity.Service> service = serviceRespository
                .findById(bookingRequestPojo.getServiceId());

        // Check if both customer and service exist
        if (!customer.isPresent() || !service.isPresent()) {
            String errorMessage = "Invalid ";
            if (!customer.isPresent()) {
                errorMessage += "customer ID";
            }
            if (!service.isPresent()) {
                if (!errorMessage.equals("Invalid ")) {
                    errorMessage += " and ";
                }
                errorMessage += "service ID";
            }
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }

        // Create a new BookingRequest and set fields
        BookingRequest bookingRequest = new BookingRequest();
        bookingRequest.setCustomer(customer.get());
        bookingRequest.setService(service.get());
        bookingRequest.setPreferredDate(bookingRequestPojo.getPreferredDate());
        bookingRequest.setLocation(bookingRequestPojo.getLocation());
        bookingRequest.setPayment(bookingRequestPojo.getPayment());

        // Save the BookingRequest and return success response
        bookingRequestRepository.save(bookingRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body("Booking successful");
    }

}