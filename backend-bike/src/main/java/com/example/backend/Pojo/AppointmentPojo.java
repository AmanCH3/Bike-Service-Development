package com.example.backend.Pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentPojo {
    private int appointmentId;
    private int serviceId ;
    private Long customerId;
    private String date ;
    private String status ;
    private  int bikeId ;
}
