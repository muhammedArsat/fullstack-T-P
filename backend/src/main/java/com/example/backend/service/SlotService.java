package com.example.backend.service;

import com.example.backend.entity.AvailSlot;
import com.example.backend.entity.StudentSlot;
import com.example.backend.entity.TeacherSlot;

import java.util.List;

public interface SlotService {

  public  StudentSlot addStudentSlot(StudentSlot studentSlot);
  public List<StudentSlot> getStudentDetail();

 public  TeacherSlot addTeacherSlot(TeacherSlot teacherSlot);

  public  List<TeacherSlot> getTeacherDetail();

   public AvailSlot addAvailSlot(AvailSlot availSlot);

   public  List<AvailSlot> getAvailSlot();
}
