package fr.diginamic.springbootangular.entities;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity

public class Department {
    @Id
    // AUTO INCREMENT ID
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nom;
    //one to many relation between depatment entity and user entity
    @OneToMany(mappedBy="department")
    private Set<User> users;

    @OneToOne
    private User manager;

    public Department() {
        users=new HashSet<User>();
    }

    public Department(String nom, User manager) {
        this.nom = nom;
        this.manager = manager;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "department{" +
                "nom='" + nom + '\'' +
                ", manager=" + manager +
                '}';
    }
}
