package com.example.backend.repository;

import com.example.backend.entity.StudentSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentSlotRepository extends JpaRepository<StudentSlot,Integer> {
}
