package com.example.backend.controller;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.entity.*;
import com.example.backend.repository.AdminRepository;
import com.example.backend.repository.StudentRepository;
import com.example.backend.repository.StudentSlotRepository;
import com.example.backend.repository.TeacherRepository;
import com.example.backend.service.SlotService;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/slot")
public class SlotController {
    @Autowired
    public SlotService slotService;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private AdminRepository adminRepository;
@PostMapping("/add-studentslot")
    public String saveStudentSlot(@RequestBody StudentSlot studentSlot){
      slotService.addStudentSlot(studentSlot);
      return "success";
    }

    @PostMapping("/add-teacherslot")

    public  String saveTeacherSlot(@RequestBody TeacherSlot teacherSlot){
    slotService.addTeacherSlot(teacherSlot);
    return "Success";
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        // Check the student table for authentication
        Student student = studentRepository.findByEmailAndPassword(email, password);
        if (student != null) {
            // Authentication successful for student
            return new LoginResponse(true, "Student login successful", "student");
        }

        // Check the teacher table for authentication
        Teacher teacher = teacherRepository.findByEmailAndPassword(email, password);
        if (teacher != null) {
            // Authentication successful for teacher
            return new LoginResponse(true, "Teacher login successful", "teacher");
        }

        Admin admin = adminRepository.findByEmailAndPassword(email,password);
        if(admin != null){
            return new LoginResponse(true,"Admin Login Successfull","Admin");
        }

        // Authentication failed
        return new LoginResponse(false, "Invalid email or password", null);
    }

    @GetMapping("/get-studentdetail")
    public List<StudentSlot> getStudentDetail(){
    return  slotService.getStudentDetail();
    }

    @GetMapping("/get-teacherslot")
    public  List<TeacherSlot> getTeacherDetail(){
    return  slotService.getTeacherDetail();
    }
}
