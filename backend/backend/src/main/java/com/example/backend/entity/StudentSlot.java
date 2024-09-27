package com.example.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class StudentSlot {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;

    private String rollno;
    private String email;
    private String pid;
    private String slot;

    public StudentSlot(int id, String name, String rollno, String email, String pid, String slot) {
        this.id = id;
        this.name = name;
        this.rollno = rollno;
        this.email = email;
        this.pid = pid;
        this.slot = slot;
    }

    public StudentSlot() {

    }
}