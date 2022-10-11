package com.reto3.reto3.Service;

import com.reto3.reto3.Entity.Category;
import com.reto3.reto3.Repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository repository;

    public List<Category> getCategory(){
        return repository.findAll();
    }

    public Category saveCategory(Category category){
        return repository.save(category);
    }
}
