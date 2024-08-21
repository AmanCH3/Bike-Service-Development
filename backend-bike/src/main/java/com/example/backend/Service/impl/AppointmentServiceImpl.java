package com.example.backend.Service.impl;

import com.example.backend.Entity.Appoinment;
import com.example.backend.Entity.Bike;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.AppointmentPojo;
import com.example.backend.Repository.AppointmentRespository;
import com.example.backend.Repository.BikeRepository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.AppointmentService;
import com.example.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl implements AppointmentService {

    private final AppointmentRespository appointmentRepository;
    private final CustomerRespository customerRepository;
    private final BikeRepository bikeRepository;
    private final ServiceRespository serviceRepository;

    @Override
    public Appoinment saveOrUpdateAppointment(AppointmentPojo appointmentPojo) {
        Appoinment appointment = new Appoinment();

        Customer customer = customerRepository.findById(appointmentPojo.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer ID " + appointmentPojo.getCustomerId() + " not found"));

        com.example.backend.Entity.Service service = serviceRepository.findById((long) appointmentPojo.getServiceId())
                .orElseThrow(() -> new ResourceNotFoundException("Service ID " + appointmentPojo.getServiceId() + " not found"));

        Bike bike = bikeRepository.findById(appointmentPojo.getBikeId())
                .orElseThrow(() -> new ResourceNotFoundException("Bike ID " + appointmentPojo.getBikeId() + " not found"));

        appointment.setCustomer(customer);
        appointment.setService(service);
        appointment.setBike(bike);
        appointment.setStatus(appointmentPojo.getStatus());
        appointment.setAppointmentDate(appointmentPojo.getDate()); // Assuming you have a date field in your entity

        return appointmentRepository.save(appointment);
    }

    @Override
    public List<Appoinment> getAllAppointment(AppointmentPojo appointmentPojo) {
        return List.of();
    }

    @Override
    public List<Appoinment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @Override
    public Appoinment getAppointmentById(int id) {
        return appointmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Appointment ID " + id + " not found"));
    }

    @Override
    public Object deleteAppointmentById(int id) {
        if (!appointmentRepository.existsById(id)) {
            throw new ResourceNotFoundException("Appointment ID " + id + " not found");
        }
        appointmentRepository.deleteById(id);
        return null;
    }
}
