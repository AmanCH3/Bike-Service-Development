package com.example.backend.Pojo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CustomerPojo {
    private long id;
    private String name;
    private String contactNumber;
    private String email;
    private String address;
    private String password ;
}
