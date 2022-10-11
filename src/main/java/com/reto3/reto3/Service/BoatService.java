package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Boat;
import com.reto3.reto3.Repository.BoatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoatService {
    @Autowired
    private BoatRepository repository;

    public List<Boat> getBoat(){
        return repository.findAll();
    }

    public Boat saveBoat(Boat boat){
        return repository.save(boat);
    }
}

