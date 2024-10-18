package com.example.backend;  // Change the package to match the correct one

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {  // Change the class name to BackendApplication

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);  // Ensure it matches the new class name
    }
}
