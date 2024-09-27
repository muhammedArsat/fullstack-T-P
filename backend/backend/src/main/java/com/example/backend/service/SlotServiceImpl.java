package com.example.backend.service;

import com.example.backend.entity.StudentSlot;
import com.example.backend.entity.TeacherSlot;
import com.example.backend.repository.StudentSlotRepository;
import com.example.backend.repository.TeacherSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SlotServiceImpl implements SlotService{
    @Autowired
    public StudentSlotRepository studentSlotRepository;

    @Autowired
    public TeacherSlotRepository teacherSlotRepository;


    @Override
    public StudentSlot addStudentSlot(StudentSlot studentSlot) {
        return  studentSlotRepository.save(studentSlot);
    }

    @Override
    public List<StudentSlot> getStudentDetail() {
        return  studentSlotRepository.findAll();
    }

    @Override
    public TeacherSlot addTeacherSlot(TeacherSlot teacherSlot) {
            return teacherSlotRepository.save(teacherSlot);
    }

    @Override
    public List<TeacherSlot> getTeacherDetail() {
        return teacherSlotRepository.findAll();
    }
}
