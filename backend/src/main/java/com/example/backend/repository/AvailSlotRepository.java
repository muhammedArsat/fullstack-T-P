package com.example.backend.repository;

import com.example.backend.entity.AvailSlot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvailSlotRepository extends JpaRepository<AvailSlot,Integer> {
}
