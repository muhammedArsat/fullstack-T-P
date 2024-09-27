package com.example.backend.entity.teaslot;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "TEACHERSLOT_DETAILS")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Teaslot {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private  String email;
    private LocalDateTime dateTime;
}
