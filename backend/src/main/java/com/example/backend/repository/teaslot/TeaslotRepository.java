package com.example.backend.repository.teaslot;

import java.util.List;


import com.example.backend.entity.teaslot.Teaslot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface TeaslotRepository extends JpaRepository<Teaslot, Long>{

    @Query(value="select u from OrderDetails as u")
    List<Teaslot> getOrderList();

}