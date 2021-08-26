package fr.diginamic.springbootangular.entities;
import javax.persistence.*;
import java.time.LocalDate;


@Entity
public class Absence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String motif;
    private LocalDate dateDebut;
    private LocalDate dateFin;

    public enum Type{ PAYE,RTT,FERIE,SANS_SOLDE; }
    public enum Status{ INITIALE, EN_ATTENTE_VALIDATION, VALIDEE, REJETEE; }

    private Type absenceType;
    private Status requestStatus;

    // many to one relation between absence entity and user entity
    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    public Absence() {
    }

    public Absence(String motif, LocalDate dateDebut, LocalDate localDateFin, Type absenceType) {
        this.motif = motif;
        this.dateDebut = dateDebut;
        this.dateFin = localDateFin;
        this.absenceType = absenceType;
        this.requestStatus = Status.INITIALE;

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

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public Type getAbsenceType() {
        return absenceType;
    }

    public void setAbsenceType(Type absenceType) {
        this.absenceType = absenceType;
    }

    public Status getRequestStatus() {
        return requestStatus;
    }

    public void setRequestStatus(Status requestStatus) {
        this.requestStatus = requestStatus;
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
                ", localDateDebut=" + dateDebut +
                ", localDateFin=" + dateFin +
                '}';
    }
}
