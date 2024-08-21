package com.example.backend.Service.impl;


import com.example.backend.Entity.Admin;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.AuthPojo;
import com.example.backend.Repository.AdminRespository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Security.JwtService;
import com.example.backend.Service.AuthenticateService;
import com.example.backend.shared.pojo.AuthResponse;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthenticateServiceImpl implements AuthenticateService {
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailService userDetailsService;
    private final AdminRespository adminRespository ;
    private final JwtService jwtUtils;
   private final CustomerRespository customerRespository ;


    private static final Logger log = LoggerFactory.getLogger(AuthenticateServiceImpl.class);

    public AuthResponse authenticate(AuthPojo authPojo) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authPojo.getEmail(), authPojo.getPassword())
        );

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String jwtToken = jwtUtils.generateToken(userDetails);
        log.info("User authenticated: {}", userDetails.isEnabled());

        Customer customer = customerRespository.findByEmail(authPojo.getEmail()).orElse(null);
        if (customer != null) {
            return AuthResponse.builder()
                    .token(jwtToken)

                    .UserId(customer.getCustomerId())
                    .UserType(customer.getRole().name())
                    .build() ;
        }

        Admin admin = adminRespository.findByEmail(authPojo.getEmail()).orElse(null) ;
        if (admin != null) {
            return  AuthResponse.builder()
                    .token(jwtToken)
                    .UserId(admin.getAdminID())
                    .UserType(admin.getRole().name())
                    .build() ;
        }





        throw new EntityNotFoundException("User not found");
    }
}

