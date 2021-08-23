package fr.diginamic.springbootangular.entities;
import javax.persistence.*;
import java.time.LocalDate;


@Entity
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="abs_id")
    private Long id;
    private String motif;
    @Column(name="debut")
    private LocalDate localDateDebut;
    @Column(name="fin")
    private LocalDate localDateFin;
    private Type type;
    private Statut statut;


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
    @JoinColumn(name="user_id")
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

    public Type getType() {
        return type;
    }

    public Statut getStatut() {
        return statut;
    }

    public User getUser() {
        return user;
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

    @Override
    public String toString() {
        return "Absence{" +
                "motif='" + motif + '\'' +
                ", localDateDebut=" + localDateDebut +
                ", localDateFin=" + localDateFin +
                '}';
    }
}
