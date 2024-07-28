package com.example.backend.Service;

public interface AuthService {
    String determineUserType(String email, String password);
    String authenticateAdmin(String email, String password);
    String authenticateRestaurant(String email, String password);
    String authenticateUser(String email, String password);
}

