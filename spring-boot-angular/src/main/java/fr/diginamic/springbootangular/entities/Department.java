package fr.diginamic.springbootangular.entities;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity

public class Department {
    @Id
    // AUTO INCREMENT ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String nom;
    private User manager;
    //one to many relation between depatment entity and user entity
    @OneToMany(mappedBy="department")
    private Set<User> users;

    public Department() {
        users=new HashSet<User>();
    }

    public Department(String nom, User manager) {
        this.nom = nom;
        this.manager = manager;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public User getManager() {
        return manager;
    }

    public void setManager(User manager) {
        this.manager = manager;
    }

    @Override
    public String toString() {
        return "department{" +
                "nom='" + nom + '\'' +
                ", manager=" + manager +
                '}';
    }
}
