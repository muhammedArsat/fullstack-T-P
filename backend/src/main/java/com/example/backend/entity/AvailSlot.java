package com.example.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "Available_slot")
public class AvailSlot {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


    private LocalDate date;
    private String time;

    public AvailSlot(int id, LocalDate date, String time) {
        this.id = id;
        this.date = date;
        this.time = time;
    }

    public AvailSlot() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}