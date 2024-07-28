package com.example.backend.Controller;

import com.example.backend.Pojo.AuthPojo;
import com.example.backend.Service.AuthenticateService;
import com.example.backend.shared.pojo.AuthResponse;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticateService authenticateService;

    @PostMapping("/auth")
    public ResponseEntity<GlobalApiResponse<AuthResponse>> authenticateUser(@RequestBody AuthPojo authRequest) {
        AuthResponse authResponse = authenticateService.authenticate(authRequest);

        System.out.println("Auth response ::: " + authResponse);
        if (authResponse != null) {
            GlobalApiResponse<AuthResponse> response = GlobalApiResponse.<AuthResponse>builder()
                    .message("Login successful")
                    .statusCode(200)
                    .data(authResponse)
                    .build();
            return ResponseEntity.ok(response);
        } else {
            GlobalApiResponse<AuthResponse> response = GlobalApiResponse.<AuthResponse>builder()
                    .message("Invalid email or password")
                    .statusCode(401)
                    .data(null)
                    .build();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

}
