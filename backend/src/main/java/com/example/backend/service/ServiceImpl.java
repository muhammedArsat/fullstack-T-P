package com.example.backend.service;

import com.example.backend.entity.StudentSlot;
import com.example.backend.repository.StudentSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ServiceImpl implements  Service{
    @Autowired
    StudentSlotRepository studentSlotRepository;
    @Override
    public StudentSlot add(StudentSlot studentSlot) {
       return  studentSlotRepository.save(studentSlot);
    }
}
