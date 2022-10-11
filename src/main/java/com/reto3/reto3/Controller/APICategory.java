package com.reto3.reto3.Controller;

import com.reto3.reto3.Entity.Category;
import com.reto3.reto3.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/Category")
public class APICategory {
    @Autowired
    private CategoryService service;

    @GetMapping("/all")
    public List<Category> findAllCategory(){
        return service.getCategory();
    }

    @PostMapping("/save")
    public ResponseEntity saveCategory(@RequestBody Category category){
        service.saveCategory(category);
        return ResponseEntity.status(201).build();
    }
}
