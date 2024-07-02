package com.example.backend.Service.impl;

import com.example.backend.Entity.Appoinment;
import com.example.backend.Pojo.AppointmentPojo;
import com.example.backend.Repository.AppointmentRespository;
import com.example.backend.Service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl  implements AppointmentService {
    private final AppointmentRespository appointmentRespository;

    @Override
    public Appoinment saveOrUpdateAppointment(AppointmentPojo appointmentPojo) {
        Appoinment appoinment = new Appoinment() ;
        appoinment.setAppointmentDate(appointmentPojo.getDate());
        appoinment.setStatus(appointmentPojo.getStatus());
      return appointmentRespository.save(appoinment) ;
    }

    @Override
    public List<Appoinment> getAllAppointment() {
        return appointmentRespository.findAll() ;
    }

    @Override
    public Appoinment getAppointmentById(int id) {
        return appointmentRespository.findById(id).get() ;
    }

    @Override
    public void deleteAppointmentById(int id) {
        appointmentRespository.deleteById(id);

    }
}
