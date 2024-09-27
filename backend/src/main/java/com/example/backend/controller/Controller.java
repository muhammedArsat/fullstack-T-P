package com.example.backend.controller;

import com.example.backend.entity.StudentSlot;
import com.example.backend.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    Service service;

public StudentSlot controller(@RequestBody StudentSlot studentSlot){
    return  service.add(studentSlot);
}
}
