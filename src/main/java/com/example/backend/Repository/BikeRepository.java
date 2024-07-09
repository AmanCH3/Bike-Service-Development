package com.example.backend.Repository;

import com.example.backend.Entity.Bike;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BikeRepository extends JpaRepository<Bike,Integer> {


}
