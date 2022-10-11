package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Admin;
import com.reto3.reto3.Entity.Score;
import com.reto3.reto3.Repository.AdminRepository;
import com.reto3.reto3.Repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {
    @Autowired
    private ScoreRepository repository;

    public List<Score> getScore(){
        return repository.findAll();
    }

    public Score saveScore(Score score){
        return repository.save(score);
    }
}
