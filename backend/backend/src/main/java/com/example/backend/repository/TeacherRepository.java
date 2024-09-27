package com.example.backend.repository;


// TeacherRepository.java

import com.example.backend.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {

    Teacher findByEmailAndPassword(String email, String password);
}