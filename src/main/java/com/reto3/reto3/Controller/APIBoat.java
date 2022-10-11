package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Boat;
import com.reto3.reto3.Service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Boat")
public class APIBoat {
    @Autowired
    private BoatService service;

    @GetMapping("/all")
    public List<Boat> findAllBoat(){
        return service.getBoat();
    }

    @PostMapping("/save")
    public ResponseEntity saveBoat(@RequestBody Boat boat){
        service.saveBoat(boat);
        return ResponseEntity.status(201).build();
    }
}
