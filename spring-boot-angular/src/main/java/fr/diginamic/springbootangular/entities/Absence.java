package fr.diginamic.springbootangular.entities;
import javax.persistence.*;
import java.time.LocalDate;


@Entity
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String motif;
    private LocalDate localDateDebut;
    private LocalDate localDateFin;


    // enum for vacation type
    public enum Type{
        PAYE,RTT,FERIE,SANS_SOLDE;
    }
    // enum for vacation request status
    public enum Statut{
        INITIALE, EN_ATTENTE_VALIDATION, VALIDEE, REJETEE;
    }
    // many to one relation between absence entity and user entity
    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    public Absence() {
    }

    public Absence(String motif, LocalDate localDateDebut, LocalDate localDateFin) {
        this.motif = motif;
        this.localDateDebut = localDateDebut;
        this.localDateFin = localDateFin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMotif() {
        return motif;
    }

    public void setMotif(String motif) {
        this.motif = motif;
    }

    public LocalDate getLocalDateDebut() {
        return localDateDebut;
    }

    public void setLocalDateDebut(LocalDate localDateDebut) {
        this.localDateDebut = localDateDebut;
    }

    public LocalDate getLocalDateFin() {
        return localDateFin;
    }

    public void setLocalDateFin(LocalDate localDateFin) {
        this.localDateFin = localDateFin;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Absence{" +
                "motif='" + motif + '\'' +
                ", localDateDebut=" + localDateDebut +
                ", localDateFin=" + localDateFin +
                '}';
    }
}
