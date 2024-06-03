package com.example.backend.Controller;

import com.example.backend.Entity.BookingCenter;
import com.example.backend.Pojo.BookingPojo;
import com.example.backend.Service.BookingService;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class BookingController {
    private final BookingService bookingService;

    @GetMapping
    public GlobalApiResponse<List<BookingCenter>> getAllBookings(){
        return GlobalApiResponse.
                <List<BookingCenter>>builder()
                .data(this.bookingService.getAllBookings())
                .statusCode(200)
                .message("data retreived successfully")
                .build() ;




    }

    @PostMapping
    public GlobalApiResponse<String> addBooking(@RequestBody BookingPojo bookingPojo){
        this.bookingService.saveBook(bookingPojo);
        return GlobalApiResponse.<String>builder()
                .data("Saved")
                .statusCode(200)
                .message("Data saved succesfully")
                .build();

    }

    @PutMapping
    public GlobalApiResponse<BookingCenter> updateBooking(@RequestBody BookingPojo bookingPojo){
        BookingCenter updateBook = this.bookingService.UpdateBook(bookingPojo);
        return  GlobalApiResponse .<BookingCenter>builder()
                .data(updateBook)
                .statusCode(200)
                .message("Data has been updated sucessfully")
                .build() ;
    }

    @DeleteMapping("delete/{id}")
    public GlobalApiResponse<Object> deleteBooking(@PathVariable int id){
        this.bookingService.deleteBooking(id);
        return GlobalApiResponse.builder()
                .data("Data  delete" + id + "  has been successfully")
                .statusCode(200)
                .message("Data Has been deleted")
                .build() ;
    }

}
