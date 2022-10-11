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
@Table(name="boat")
public class Boat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String brand;
    private Integer year;
    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonIgnoreProperties("boats")
    private Category category;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "boat")
    @JsonIgnoreProperties({"boat","client"})
    private List<Message> messages;

    @OneToMany(cascade = {CascadeType.PERSIST},mappedBy = "boat")
    @JsonIgnoreProperties({"boat","client"})
    private List<Reservation> reservations;
}
