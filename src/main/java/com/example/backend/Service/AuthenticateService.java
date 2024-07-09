package com.example.backend.Service;

import com.example.backend.Pojo.AuthPojo;
import com.example.backend.shared.pojo.AuthResponse;
public interface AuthenticateService {
    AuthResponse authenticate(AuthPojo authenticateRequest);
}

