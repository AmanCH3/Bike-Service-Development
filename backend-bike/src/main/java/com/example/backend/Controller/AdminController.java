package com.example.backend.Controller;
import com.example.backend.Entity.Admin;
import com.example.backend.Pojo.AdminPojo;
import com.example.backend.Service.AdminServices;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admins")
@AllArgsConstructor
public class AdminController {
   private final AdminServices adminServices ;

    @PostMapping
    public ResponseEntity<GlobalApiResponse<Admin>> createAdmin(@RequestBody AdminPojo adminPojo) {

        Admin savedAdmin = adminServices.saveAdmin(adminPojo);
        GlobalApiResponse<Admin> response = new GlobalApiResponse<>("Admin created successfully", 201, savedAdmin);
        return ResponseEntity.status(201).body(response);
    }

    @GetMapping
    public ResponseEntity<GlobalApiResponse<List<Admin>>> getAllAdmins() {
        List<Admin> admins = adminServices.getAllAdmins();
        GlobalApiResponse<List<Admin>> response = new GlobalApiResponse<>("All admins fetched successfully", 200, admins);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<GlobalApiResponse<Admin>> getAdminById(@PathVariable Long id) {
        return adminServices.getAdminById(id)
                .map(admin -> {
                    GlobalApiResponse<Admin> response = new GlobalApiResponse<>("Admin fetched successfully", 200, admin);
                    return ResponseEntity.ok(response);
                })
                .orElseGet(() -> {
                    GlobalApiResponse<Admin> response = new GlobalApiResponse<>("Admin not found", 404, null);
                    return ResponseEntity.status(404).body(response);
                });
    }

    @PutMapping("/{id}")
    public ResponseEntity<GlobalApiResponse<Admin>> updateAdmin(@PathVariable Long id, @RequestBody AdminPojo adminPojo) {
        try {
//            Admin admin = new Admin();
//            admin.setAdminID(id);
//            admin.setName(adminPojo.getName());
//            admin.setEmail(adminPojo.getEmail());
//            admin.setPhone(adminPojo.getPhone());
//            admin.setUsername(adminPojo.getUsername());
//            admin.setPassword(adminPojo.getPassword());

            Admin updatedAdmin = adminServices.updateAdmin(id, adminPojo);
            GlobalApiResponse<Admin> response = new GlobalApiResponse<>("Admin updated successfully", 200, updatedAdmin);
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException ex) {
            GlobalApiResponse<Admin> response = new GlobalApiResponse<>("Admin not found", 404, null);
            return ResponseEntity.status(404).body(response);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<GlobalApiResponse<Void>> deleteAdmin(@PathVariable Long id) {
        try {
            adminServices.deleteAdmin(id);
            GlobalApiResponse<Void> response = new GlobalApiResponse<>("Admin deleted successfully", 200, null);
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException ex) {
            GlobalApiResponse<Void> response = new GlobalApiResponse<>("Admin not found", 404, null);
            return ResponseEntity.status(404).body(response);
        }
    }
    }
