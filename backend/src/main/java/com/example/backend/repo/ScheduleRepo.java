package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Schedule;

public interface ScheduleRepo extends JpaRepository<Schedule,Integer>{
    
}
