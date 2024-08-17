package com.example.backend.Pojo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BookingRequestPojo {
    private Long customerId;
    private Long serviceId;
    private String preferredDate;
    private String location ;
    private String payment ;
}
