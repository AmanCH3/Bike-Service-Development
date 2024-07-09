package com.example.backend.Pojo;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BookingPojo {
    private int bookingId;
    private int bikeId;
    private int customerId;
    private String location;
    private String ContactNumber ;

}
