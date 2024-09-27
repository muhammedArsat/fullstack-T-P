package com.example.backend.controller;

import com.example.backend.dto.LoginRequest;
import com.example.backend.dto.LoginResponse;
import com.example.backend.entity.*;
import com.example.backend.repository.*;
import com.example.backend.service.SlotService;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/slot")
@CrossOrigin
public class SlotController {
    @Autowired
    public SlotService slotService;

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private TeacherRepository teacherRepository;

    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private StudentSlotRepository studentSlotRepository;
    @Autowired
    private TeacherSlotRepository teacherSlotRepository;

    @PostMapping("/add-studentslot")
    public String saveStudentSlot(@RequestBody StudentSlot studentSlot) {
        slotService.addStudentSlot(studentSlot);
        return "success";
    }

    @PostMapping("/add-teacherslot")

    public String saveTeacherSlot(@RequestBody TeacherSlot teacherSlot) {
        slotService.addTeacherSlot(teacherSlot);
        return "Success";
    }

    @PostMapping("/add-slot")
    public String saveSlot(@RequestBody Slot slot) {
        slotService.addSlot(slot);
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

        Admin admin = adminRepository.findByEmailAndPassword(email, password);
        if (admin != null) {
            return new LoginResponse(true, "Admin Login Successfull", "Admin");
        }

        // Authentication failed
        return new LoginResponse(false, "Invalid email or password", null);
    }

    @GetMapping("/get-studentdetail")
    public List<StudentSlot> getStudentDetail() {
        return slotService.getStudentDetail();
    }

    @GetMapping("/get-student/{id}")
    public StudentSlot getIndividualId(@PathVariable Integer id) {
        return studentSlotRepository.findById(id).orElse(null);
    }

    @GetMapping("/get-teacher/{id}")
    public TeacherSlot getIndividualsId(@PathVariable Integer id) {
        return teacherSlotRepository.findById(id).orElse(null);
    }

    @GetMapping("/get-teacherslot")
    public List<TeacherSlot> getTeacherDetail() {
        return slotService.getTeacherDetail();
    }

    @GetMapping("/get-slot")
    public List<Slot> getSlot() {
        return slotService.getSlot();
    }

    @PutMapping("/studentupdate/{id}")
    public ResponseEntity<StudentSlot> updateSlot(@RequestBody StudentSlot newStudentSlot, @PathVariable Integer id) {
        return studentSlotRepository.findById(id).map(editSlot -> {
                    editSlot.setName(newStudentSlot.getName());
                    editSlot.setRollno(newStudentSlot.getRollno());
                    editSlot.setSlot(newStudentSlot.getSlot());
                    editSlot.setPid(newStudentSlot.getPid());
                    return studentSlotRepository.save(editSlot);
                }).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/teacherupdate/{id}")
    public  ResponseEntity<TeacherSlot>updateTeacher(@RequestBody TeacherSlot newDetails,@PathVariable Integer id){
        return  teacherSlotRepository.findById(id).map(edit->{
            edit.setName(newDetails.getName());
            edit.setSlot(newDetails.getSlot());
            return teacherSlotRepository.save(edit);
        }).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

}
