package com.example.backend.Service;

import com.example.backend.Entity.BookingRequest;
import com.example.backend.Pojo.BookingRequestPojo;

import java.util.List;

public interface BookingRequestService {
    BookingRequest addBookingRequest(BookingRequestPojo bookingRequestPojo);
    List<BookingRequest> getAllBookingRequests();
    BookingRequest getBookingRequestById(int id);
    void deleteBookingRequestById(int id);
}
