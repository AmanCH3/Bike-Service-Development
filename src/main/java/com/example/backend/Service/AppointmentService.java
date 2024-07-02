package com.example.backend.Service;

import com.example.backend.Entity.Appoinment;
import com.example.backend.Pojo.AppointmentPojo;

import java.util.List;

public interface AppointmentService {
    Appoinment saveOrUpdateAppointment(AppointmentPojo appointmentPojo);
    List<Appoinment> getAllAppointment();
    Appoinment getAppointmentById(int id);
    void deleteAppointmentById(int id);

}
