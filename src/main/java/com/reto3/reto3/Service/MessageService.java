package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Message;
import com.reto3.reto3.Repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {
    @Autowired
    private MessageRepository repository;

    public List<Message> getMessage(){
        return repository.findAll();
    }

    public Message saveMessage(Message message){
        return repository.save(message);
    }
}
