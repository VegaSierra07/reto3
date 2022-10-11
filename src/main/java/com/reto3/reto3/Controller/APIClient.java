package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Client;
import com.reto3.reto3.Service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Client")
public class APIClient {
    @Autowired
    private ClientService service;

    @GetMapping("/all")
    public List<Client> findAllService(){
        return service.getClient();
    }

    @PostMapping("/save")
    public ResponseEntity saveClient(@RequestBody Client client){
        service.saveClient(client);
        return ResponseEntity.status(201).build();
    }
}
