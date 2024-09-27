package com.example.backend.studentslot.controller;

import com.example.backend.studentslot.entity.StudentSlot;
import com.example.backend.studentslot.repository.StudentSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class StudentSlotController {
    @Autowired
    StudentSlotRepository studentSlotRepository;
    @PostMapping("/studentslot_db")
    public StudentSlot saveAccount(@RequestBody StudentSlot studentSlot){
        return studentSlotRepository.save(studentSlot);
    }
    @GetMapping ("api/v1/accounts")
    public List<StudentSlot> getAccountList(){
        return studentSlotRepository.findAll();

    }
}
