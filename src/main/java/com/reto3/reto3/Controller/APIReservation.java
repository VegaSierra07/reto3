package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Reservation;
import com.reto3.reto3.Service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Reservation")
public class APIReservation {
    @Autowired
    private ReservationService service;

    @GetMapping("/all")
    public List<Reservation> findAllReservation(){
        return service.getReservation();
    }

    @PostMapping("/save")
    public ResponseEntity saveReservation(@RequestBody Reservation reservation){
        service.saveReservation(reservation);
        return ResponseEntity.status(201).build();
    }
}
