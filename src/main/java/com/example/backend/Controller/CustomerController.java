package com.example.backend.Controller;

import com.example.backend.Pojo.CustomerPojo;
import com.example.backend.Service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

    @GetMapping
    public void getAllCustomers() {
        this.customerService.getAllCustomers();
    }

    @PostMapping()
    public void save(@RequestBody CustomerPojo customerPojo) {
        this.customerService.saveCustomer((customerPojo));
    }

    @PutMapping
    public void updateCustomer(@RequestBody CustomerPojo customerPojo) {
        this.customerService.updateCustomer((customerPojo));
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable int id) {
        this.customerService.deleteCustomerById(id);

    }
    @GetMapping("/get/{id}")
    public void getCustomer(@PathVariable int id) {
        this.customerService.getCustomerById(id);
    }




}
