package com.example.backend.repository.stdslot;

import java.util.List;

import com.example.backend.entity.stdslot.Stdslot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface StdslotRepository extends JpaRepository<Stdslot, Long>{

    @Query(value="select u from OrderDetails as u")
    List<Stdslot> getOrderList();

}