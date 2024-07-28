package com.example.backend.Service.impl;


import com.example.backend.Entity.Customer;
import com.example.backend.Pojo.CustomerPojo;
import com.example.backend.Repository.CustomerRespository;
import com.example.backend.Service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl  implements CustomerService {
    private final CustomerRespository customerRespository;


//    ===========saveOrUpdate the data ================
    @Override
    public Customer saveCustomer(CustomerPojo customerPojo) {
        Customer customer = new Customer();

        customer.setName(customerPojo.getName());
        customer.setEmail(customerPojo.getEmail());
        customer.setAddress(customerPojo.getAddress());
        customer.setContactNumber(customerPojo.getContactNumber());
        customer.setPassword(customerPojo.getPassword()); //Changes in the set Password
        customerRespository.save(customer);
        return customer;
    }

    @Override
    public List<Customer> getAllCustomers() {

        return customerRespository.findAll();
    }

    @Override
    public Customer getCustomerById(Long id) {

        return customerRespository.findById(id).get();
    }

    @Override
    public void deleteCustomerById(Long id) {
         customerRespository.deleteById(id);

    }

    @Override
    public Customer updateCustomer(CustomerPojo customerPojo) {

        return null;
    }

    @Override
    public Optional<Customer> findById(Long id) {

        return customerRespository.findById(id) ;
    }
}
