package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Message;
import com.reto3.reto3.Service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Message")
public class APIMessage {
    @Autowired
    private MessageService service;

    @GetMapping("/all")
    public List<Message> findAllMessage(){
        return service.getMessage();
    }

    @PostMapping("/save")
    public ResponseEntity saveMessage(@RequestBody Message message){
        service.saveMessage(message);
        return ResponseEntity.status(201).build();
    }
}
