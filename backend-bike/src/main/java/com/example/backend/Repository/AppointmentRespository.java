package com.example.backend.Repository;

import com.example.backend.Entity.Appoinment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRespository extends JpaRepository<Appoinment,Integer> {

}
