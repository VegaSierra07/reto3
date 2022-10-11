package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Admin;
import com.reto3.reto3.Entity.Score;
import com.reto3.reto3.Service.AdminService;
import com.reto3.reto3.Service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Score")
public class APIScore {
    @Autowired
    private ScoreService service;

    @GetMapping("/all")
    public List<Score> findAllService(){
        return service.getScore();
    }

    @PostMapping("/save")
    public ResponseEntity saveClient(@RequestBody Score score){
        service.saveScore(score);
        return ResponseEntity.status(201).build();
    }
}
