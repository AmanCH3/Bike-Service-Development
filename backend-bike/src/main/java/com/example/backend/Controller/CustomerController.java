package com.example.backend.Controller;

import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.CustomerPojo;
import com.example.backend.Service.CustomerService;
import com.example.backend.shared.pojo.GlobalApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin("*")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService customerService;

//
    @GetMapping
    public GlobalApiResponse<List<Customer>> getCustomer() {
        return GlobalApiResponse.
                <List<Customer>>builder()
                .data(this.customerService.getAllCustomers())
                .statusCode(200)
                .message("data retreived successfully")
                .build();
    }

    @PostMapping("/details")
    public GlobalApiResponse<Customer> createCustomer(@RequestBody CustomerPojo customerPojo) {
        Customer customer = this.customerService.saveCustomer(customerPojo);
         return  GlobalApiResponse.<Customer>builder()
                 .data(customer)
                 .statusCode(200)
                 .message("data saved succesfully")
                 .build();
    }

    @PutMapping("{id}")
    public GlobalApiResponse<Customer> update(@RequestBody CustomerPojo CustomerPojo){
       Customer updateCustomer = this.customerService.updateCustomer(CustomerPojo);
        return GlobalApiResponse.<Customer>builder()
                .data(updateCustomer)
                .statusCode(200)
                .message("Data updated succefully")
                .build() ;
    }

    @DeleteMapping("delete/{id}")
    public GlobalApiResponse<Object> deleteCustomer(@PathVariable Long id){
        this.customerService.deleteCustomerById(id);
        return  GlobalApiResponse.builder().
                data("Customer with id" + id + " has been successfully")
                .statusCode(200)
                .message("Data has been delete Successfully")
                .build();

    }





}
