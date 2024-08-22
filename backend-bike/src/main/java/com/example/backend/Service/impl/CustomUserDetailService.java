package com.example.backend.Service.impl;


import com.example.backend.Entity.Admin;
import com.example.backend.Entity.Customer;
import com.example.backend.Repository.AdminRespository;
import com.example.backend.Repository.CustomerRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailService implements UserDetailsService {
    private final CustomerRespository customerRespository ;
    private final AdminRespository adminRespository ;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Customer customer = customerRespository.findByEmail(username)
                .orElse(null);
        if (customer != null) {
            return customer;
        }

        Admin admin = adminRespository.findByEmail(username)
                .orElse(null) ;
        if(admin != null){
            return  admin;
        }


        throw new UsernameNotFoundException("User not found with username: " + username);
    }
}

