package com.example.backend.Service;

import com.example.backend.Entity.Appoinment;
import com.example.backend.Pojo.AppointmentPojo;

import java.util.List;

public interface AppointmentService {
    Appoinment saveOrUpdateAppointment(AppointmentPojo appointmentPojo);
    List<Appoinment> getAllAppointment(AppointmentPojo appointmentPojo);

    List<Appoinment> getAllAppointments();

    Appoinment getAppointmentById(int id);
    Object deleteAppointmentById(int id);

}
