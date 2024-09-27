package com.example.backend.teacherslot.controller;

import com.example.backend.teacherslot.entity.TeacherSlot;
import com.example.backend.teacherslot.repository.TeacherSlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class TeacherSlotController {
    @Autowired
    TeacherSlotRepository teacherSlotRepository;

    @PostMapping("api/v1/user")
    public TeacherSlot saveUser(@RequestBody TeacherSlot teacherSlot){
        return teacherSlotRepository.save(teacherSlot);
    }
    @GetMapping("api/v1/users")
    public List<TeacherSlot> getUserList(){
        return teacherSlotRepository.findAll();

    }


}

