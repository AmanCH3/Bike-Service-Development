package com.example.backend.Controller;

import com.example.backend.Entity.BookingRequest;
import com.example.backend.Entity.Customer;
import com.example.backend.Entity.Service;
import com.example.backend.Repository.BookingRequestRepository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customer/services")
@RequiredArgsConstructor
public class CustomerServiceController {

    private final CustomerRespository customerRespository ;
    private final BookingRequestRepository bookingRequestRepository;
    private final ServiceRespository serviceRespository ;

    @GetMapping
    public ResponseEntity<List<Service>> getAllServices() {
        List<Service> services = serviceRespository.findAll();
        return ResponseEntity.ok(services);
    }

    @PostMapping("/book")
    public ResponseEntity<String> bookService(@RequestBody BookingRequest bookingRequest) {
        Optional<Customer> customer = customerRespository.findById(bookingRequest.getCustomer().getCustomerId());
        Optional<Service> service = serviceRespository.findById(bookingRequest.getService().getServiceId());

        if (!customer.isPresent() || !service.isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid customer or service ID");
        }

        bookingRequestRepository.save(bookingRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body("Booking successful");
    }
}
