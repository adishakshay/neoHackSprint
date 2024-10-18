package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.TimeOffRequest;

public interface TimeOffRequestRepo extends JpaRepository<TimeOffRequest,Integer>{
    
}
