package com.example.backend;

import com.example.backend.Entity.Customer;
import com.example.backend.Repository.CustomerRespository;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.List;
import java.util.Optional;

@DataJpaTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class UserRepositoryTest {
    @Autowired
    private CustomerRespository customerRespository ;
    @Test
    @Order(1)
    @Rollback(value = false)
    public void saveUserTest() {
        Customer customer = Customer.builder()
                .name("Aman")
                .email("aman@gmail.com")
                .password("test123")
                .contactNumber("123456789")
                .address("Ktm")
                .build();
        customerRespository.save(customer);
        Assertions.assertThat(customer.getCustomerId()).isGreaterThan(0);
    }

    @Test
    @Order(2)
    public void findByIdTest(){
        Customer customer = customerRespository.findById(1L).get();
        Assertions.assertThat(customer.getCustomerId()).isEqualTo(1L);
    }

    @Test
    @Order(3)
    public void getListOfUserTest(){
        List<Customer> userList = customerRespository.findAll();
        Assertions.assertThat(userList).isNotNull();
    }

    @Test
    @Order(4)
    @Rollback(value = false)
    public void updateUserTest(){
        Customer customer = customerRespository.findById(1L).get();
        customer.setEmail("aman12@gmail.com");
        customerRespository.save(customer);
        Assertions.assertThat(customer.getEmail()).isEqualTo("aman12@gmail.com");
    }

    @Test
    @Order(5)
    @Rollback(value = false)
    public void deleteUserTest(){
        Customer customer= customerRespository.findById(1L).get();
        customerRespository.delete(customer);
        Customer user1 = null;
        Optional<Customer> optionalCustomer = customerRespository.findByEmail("aman12@gmail.com");
        if(optionalCustomer.isPresent()){
            user1 = optionalCustomer.get();
        }
        Assertions.assertThat(user1).isNull();
    }
}