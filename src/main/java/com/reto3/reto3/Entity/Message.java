package com.reto3.reto3.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="message")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idMessage;
    private String messageText;

    @ManyToOne
    @JoinColumn(name = "boat_id")
    @JsonIgnoreProperties({"messages","reservations"})
    private Boat boat;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonIgnoreProperties({"messages","reservations"})
    private Client client;

}
