package com.example.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.TimeOffRequest;
import com.example.backend.repo.TimeOffRequestRepo;

import java.util.List;
import java.util.Optional;

@Service
public class TimeOffRequestService {

    @Autowired
    private TimeOffRequestRepo timeOffRequestRepository;

    public List<TimeOffRequest> getAllTimeOffRequests() {
        return timeOffRequestRepository.findAll();
    }

    public Optional<TimeOffRequest> getTimeOffRequestById(int id) {
        return timeOffRequestRepository.findById(id);
    }

    public TimeOffRequest createTimeOffRequest(TimeOffRequest timeOffRequest) {
        return timeOffRequestRepository.save(timeOffRequest);
    }

    public TimeOffRequest updateTimeOffRequest(int id, TimeOffRequest timeOffRequest) {
        if (timeOffRequestRepository.existsById(id)) {
            timeOffRequest.setTimeOffRequestId(id);
            return timeOffRequestRepository.save(timeOffRequest);
        } else {
            return null; // Or throw an exception if preferred
        }
    }

    public boolean deleteTimeOffRequest(int id) {
        if (timeOffRequestRepository.existsById(id)) {
            timeOffRequestRepository.deleteById(id);
            return true;
        } else {
            return false; 
        }
    }
}
