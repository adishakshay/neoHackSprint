package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Profile;

import java.util.List;

public interface ProfileRepo extends JpaRepository<Profile, Integer> {
    List<Profile> findByRole(String role);
    List<Profile> findByDept(String dept);
    List<Profile> findByRoleAndDept(String role, String dept);
}
