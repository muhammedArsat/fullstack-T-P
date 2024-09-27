package com.example.backend.service;

import com.example.backend.entity.Slot;
import com.example.backend.entity.StudentSlot;
import com.example.backend.entity.TeacherSlot;

import java.util.List;

public interface SlotService {

    public StudentSlot addStudentSlot(StudentSlot studentSlot);

    public List<StudentSlot> getStudentDetail();

    public TeacherSlot addTeacherSlot(TeacherSlot teacherSlot);

    public List<TeacherSlot> getTeacherDetail();

    public  Slot addSlot(Slot slot);

    List<Slot> getSlot();


}

