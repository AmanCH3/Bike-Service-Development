package com.example.backend.Controller;

import com.example.backend.Entity.Service;
import com.example.backend.Pojo.ServicePojo;
import com.example.backend.Service.ServiceService;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/service")
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
    public GlobalApiResponse<Object> deleteService(@PathVariable Long id) {
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
    public ResponseEntity<GlobalApiResponse<Service>> addService(@RequestBody ServicePojo servicePojo) {
        Service service=serviceService.updateService(servicePojo);
//        this.serviceService.updateService(servicePojo);
        GlobalApiResponse<Service> response=new GlobalApiResponse<>("crerated ",200,service);
        return ResponseEntity.ok(response);

    }


}
