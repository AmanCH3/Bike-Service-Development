package com.example.backend.shared.pojo;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

    public class GlobalApiResponse<T>{
        private String message;
        private Integer statusCode ;
        private T data ;
    }

