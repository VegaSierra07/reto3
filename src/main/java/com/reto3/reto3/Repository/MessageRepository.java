package com.reto3.reto3.Repository;

import com.reto3.reto3.Entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message,Long> {
}
