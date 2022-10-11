package com.reto3.reto3.Repository;

import com.reto3.reto3.Entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Long> {
}
