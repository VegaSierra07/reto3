package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Admin;
import com.reto3.reto3.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    @Autowired
    private AdminRepository repository;

    public List<Admin> getAdmin(){
        return repository.findAll();
    }

    public Admin saveAdmin(Admin admin){
        return repository.save(admin);
    }
}
