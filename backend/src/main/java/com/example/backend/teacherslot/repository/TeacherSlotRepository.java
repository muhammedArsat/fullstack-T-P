package com.example.backend.teacherslot.repository;

import com.example.backend.teacherslot.entity.TeacherSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherSlotRepository extends JpaRepository<TeacherSlot,Long> {

}
