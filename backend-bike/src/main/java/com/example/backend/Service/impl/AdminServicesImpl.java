package com.example.backend.Service.impl;

import com.example.backend.Entity.Admin;
import com.example.backend.Pojo.AdminPojo;
import com.example.backend.Repository.AdminRespository;
import com.example.backend.Service.AdminServices;
import com.example.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminServicesImpl implements AdminServices {

    private final AdminRespository adminRespository ;



    @Override
    public Admin saveAdmin(AdminPojo adminPojo) {
        Admin admin = new Admin();
        mapPojoToEntity(adminPojo,admin);

        return adminRespository.save(admin);
    }

    @Override
    public List<Admin> getAllAdmins() {
        return adminRespository.findAll();
    }

    @Override
    public Optional<Admin> getAdminById(Long adminID) {
        return adminRespository.findById(Math.toIntExact(adminID));
    }

    @Override
    public Admin updateAdmin(Long adminID, AdminPojo adminDetails) {
        return adminRespository.findById(Math.toIntExact(adminID)).map(existingadmin -> {
            mapPojoToEntity(adminDetails, existingadmin);
            return adminRespository.save(existingadmin);
        }).orElseThrow(() -> new ResourceNotFoundException("Admin not found with id " + adminID));
    }

    @Override
    public void deleteAdmin(Long adminID) {
        adminRespository.deleteById(Math.toIntExact(adminID));
    }

    private void mapPojoToEntity(AdminPojo adminPojo, Admin admin) {
        admin.setName(adminPojo.getName());
        admin.setEmail(adminPojo.getEmail());
        admin.setPhone(adminPojo.getPhone());
        admin.setUsername(Integer.valueOf(adminPojo.getUsername()));
        admin.setPassword(adminPojo.getPassword());

    }
}
