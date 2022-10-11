package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Reservation;
import com.reto3.reto3.Repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository repository;

    public List<Reservation> getReservation(){
        return repository.findAll();
    }

    public Reservation saveReservation(Reservation reservation){
        return repository.save(reservation);
    }
}
