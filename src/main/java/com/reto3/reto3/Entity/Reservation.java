package com.reto3.reto3.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="reservation")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idReservation;
    private Date startDate;
    private Date devolutionDate;
    private String status="created";

    @ManyToOne
    @JoinColumn(name = "boat_id")
    @JsonIgnoreProperties("reservations")
    private Boat boat;

    @ManyToOne
    @JoinColumn(name = "client_id")
    @JsonIgnoreProperties({"messages","reservations"})
    private Client client;

    @ManyToOne
    @JoinColumn(name="score_id")
    @JsonIgnoreProperties({"messages","reservations"})
    private Score score;
}
