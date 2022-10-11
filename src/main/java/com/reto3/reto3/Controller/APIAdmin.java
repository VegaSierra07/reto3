package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Admin;
import com.reto3.reto3.Service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Admin")
public class APIAdmin {
    @Autowired
    private AdminService service;

    @GetMapping("/all")
    public List<Admin> findAllService(){
        return service.getAdmin();
    }

    @PostMapping("/save")
    public ResponseEntity saveClient(@RequestBody Admin admin){
        service.saveAdmin(admin);
        return ResponseEntity.status(201).build();
    }
}
