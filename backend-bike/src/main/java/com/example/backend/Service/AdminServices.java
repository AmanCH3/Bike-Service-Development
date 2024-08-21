package com.example.backend.Service;



import com.example.backend.Entity.Admin;
import com.example.backend.Pojo.AdminPojo;

import java.util.List;
import java.util.Optional;

public interface AdminServices {
    Admin saveAdmin(AdminPojo admin);
    List<Admin> getAllAdmins();
    Optional<Admin> getAdminById(Long adminID);
    Admin updateAdmin(Long adminID, AdminPojo adminDetails);
    void deleteAdmin(Long adminID);
}
