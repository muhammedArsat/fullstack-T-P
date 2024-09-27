package com.example.backend.studentslot.repository;


import com.example.backend.studentslot.entity.StudentSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentSlotRepository extends JpaRepository<StudentSlot, Long> {

}
