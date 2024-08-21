package com.example.backend.Pojo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminPojo {
    private Long adminID;
    private String name;
    private String email;
    private Integer phone;
    private String username;
    private String password;
}
