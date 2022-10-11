package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Client;
import com.reto3.reto3.Repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientRepository repository;

    public List<Client> getClient(){
        return repository.findAll();
    }

    public Client saveClient(Client client){
        return repository.save(client);
    }
}
