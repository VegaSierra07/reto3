package com.reto3.reto3.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="score")
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer scoreId;
    private Integer puntaje;
    private String description;


    @OneToMany(cascade = {CascadeType.PERSIST}, mappedBy = "score")
    @JsonIgnoreProperties("score")
    private List<Reservation> reservations;
}
