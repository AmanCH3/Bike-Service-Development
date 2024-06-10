package com.example.backend.Pojo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CustomerPojo {
    private String name;
    private String contactNumber;
    private String email;
    private String address;
    private String role ; // Admin or User
    private String password;
}
