package com.example.backend.Pojo;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CustomerPojo {
    private int id;
    private String name;
    private String email;
    private String phone;
}
