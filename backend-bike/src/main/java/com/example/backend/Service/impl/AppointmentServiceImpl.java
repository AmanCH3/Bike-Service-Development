package com.example.backend.Service.impl;

import com.example.backend.Entity.Appoinment;
import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.AppointmentPojo;
import com.example.backend.Repository.AppointmentRespository;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Repository.ServiceRespository;
import com.example.backend.Service.AppointmentService;
import com.example.backend.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AppointmentServiceImpl  implements AppointmentService {
    private final AppointmentRespository appointmentRespository;
    private  final CustomerRespository customerRespository ;
    private final ServiceRespository serviceRespository ;

    @Override
    public Appoinment saveOrUpdateAppointment(AppointmentPojo appointmentPojo) {
        Appoinment appoinment = new Appoinment() ;

        Optional<Customer> customer = customerRespository.findById((long) appointmentPojo.getCustomerId());
        Optional<com.example.backend.Entity.Service> service = serviceRespository.findById((long) appointmentPojo.getServiceId());
        if (customer.isPresent() && service.isPresent()) {
            Customer customerEntity = customer.get();
            appoinment.setCustomer(customerEntity);
            appoinment.setService(service.get());
        } else {

            throw new ResourceNotFoundException("Appointment  ID " + appointmentPojo.getCustomerId() + " not found");
        }


       appoinment.setAppointmentDate(appointmentPojo.getDate());
        appoinment.setStatus(appointmentPojo.getStatus());
        appoinment.setPaymentFirst(appointmentPojo.getPaymentFirst());
        appoinment.setPaymentType(appointmentPojo.getPaymentType());
      return appointmentRespository.save(appoinment) ;
    }

    @Override
    public List<Appoinment> getAllAppointment(AppointmentPojo appointmentPojo) {
        return appointmentRespository.findAll() ;
    }

    @Override
    public Appoinment getAppointmentById(int id) {
        return appointmentRespository.findById(id).get() ;
    }

    @Override
    public Object deleteAppointmentById(int id) {
        appointmentRespository.deleteById(id);

        return null;
    }
}
