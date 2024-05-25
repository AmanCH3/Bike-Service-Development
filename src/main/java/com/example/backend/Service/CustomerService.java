package com.example.backend.Service;

import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.CustomerPojo;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerService {
    Customer saveCustomer(CustomerPojo customerPojo);
    List<Customer> getAllCustomers();
    Customer getCustomerById(int id);
    void deleteCustomerById(int id);
    Customer updateCustomer(CustomerPojo customerPojo);
    Optional<Customer> findById(int id) ;

}
