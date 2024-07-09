package com.example.backend.Controller;

import com.example.backend.Entity.Appoinment;
import com.example.backend.Pojo.AppointmentPojo;
import com.example.backend.Service.AppointmentService;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.resource.ResourceUrlProvider;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@RequiredArgsConstructor
public class AppointmentController {
    private final AppointmentService appointmentService;
    private final ResourceUrlProvider mvcResourceUrlProvider;

    @GetMapping
    public GlobalApiResponse <List<Appoinment>> getAppointment(AppointmentPojo appointmentPojo) {
         List<Appoinment> appoinment = this.appointmentService.getAllAppointment(appointmentPojo) ;
         return GlobalApiResponse.<List<Appoinment>>builder()
                 .data(appoinment)
                 .statusCode(200)
                 .message("Data has been rettrived  successfully")
                 .build() ;

    }

    @PostMapping
    public GlobalApiResponse <Appoinment> addAppointment(AppointmentPojo appointmentPojo) {
        Appoinment updateAppointment = this.appointmentService.saveOrUpdateAppointment(appointmentPojo) ;
        return GlobalApiResponse.<Appoinment>builder()
                .data(updateAppointment)
                .statusCode(200)
                .message("data has been updated successfully")
                .build()
                ;
    }

    @PutMapping
    public GlobalApiResponse <Appoinment> UpdateAppointment(AppointmentPojo appointmentPojo) {
        Appoinment updateAppointment = this.appointmentService.saveOrUpdateAppointment(appointmentPojo);
        return GlobalApiResponse.<Appoinment>builder()
                .data(updateAppointment)
                .statusCode(200)
                .message("data has been updated successfully")
                .build()
                ;
    }

    @DeleteMapping("delete/{id}")
    public GlobalApiResponse<Object> deleteAppointment(@PathVariable Integer id) {
        return  GlobalApiResponse.builder()
                .data(this.appointmentService.deleteAppointmentById(id) )
                .statusCode(200)
                .message("Data has been deleted succesfully")

                .build() ;
    }
}
