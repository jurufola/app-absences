package fr.diginamic.springbootangular.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class ClosedDay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDate date;

    public enum Category { JOUR_FERIE, RTT_EMPLOYEUR };
    private Category category;

    public ClosedDay() {
    }

    public ClosedDay(LocalDate date, Category category) {
        this.date = date;
        this.category = category;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "ClosedDay{" +
                "date=" + date +
                ", category=" + category +
                '}';
    }
}
