package com.example.backend.Controller;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;
import com.example.backend.Service.ServiceService;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("service")
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceService serviceService;
    @GetMapping
    public GlobalApiResponse<List<Service>> getAllServices() {
        return GlobalApiResponse.
                <List<Service>>builder()
                .data(this.serviceService.getAllServices())
                .statusCode(200)
                .message("data retreived successfully")
                .build();

    }
    @DeleteMapping("delete/{id}")
    public GlobalApiResponse<Object> deleteService(@PathVariable Integer id) {
        this.serviceService.deleteService(id);
        return GlobalApiResponse.builder()
                .data("Data has been  "+id + "succefully")
                .statusCode(200)
                .message("Data deleted")
                .build() ;
    }
    @PutMapping
    public GlobalApiResponse<Service> updateService(@RequestBody ServicePojo servicePojo) {
        Service updateService = this.serviceService.updateService(servicePojo);
        return  GlobalApiResponse.<Service>builder().
                data(updateService)
                .statusCode(200)
                .message("Data  has been updated ")
                .build() ;
    }
    @PostMapping
    public GlobalApiResponse<Object> addService(@RequestBody ServicePojo servicePojo) {
        Service addService = this.serviceService.addService(servicePojo);
        return GlobalApiResponse.builder()
                .data(addService)
                .statusCode(200)
                .message("Data has been post")
                .build() ;
    }


}
