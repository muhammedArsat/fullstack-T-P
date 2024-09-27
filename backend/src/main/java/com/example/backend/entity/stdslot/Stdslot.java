package com.example.backend.entity.stdslot;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "STUDENTSLOT_DETAILS")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Stdslot {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String rollno;
  private  String email;
  private String pid;
  private LocalDateTime dateTime;
}
