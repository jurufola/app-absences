package fr.diginamic.springbootangular.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nomRole;
    // one to many relation between Role entity and user entity
    @JsonManagedReference
    @OneToMany(mappedBy="role", cascade = CascadeType.ALL)
    private Set<User> users;

    public Role(){
        users=new HashSet<User>();
    }

    public Role(String nomRole) {
        this.nomRole = nomRole;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNomRole() {
        return nomRole;
    }

    public void setNomRole(String nomRole) {
        this.nomRole = nomRole;
    }

    public Set<User> getUsers() {
        return users;
    }

    public void setUsers(Set<User> users) {
        this.users = users;
    }

    @Override
    public String toString() {
        return "Role{" +
                "nomRole='" + nomRole + '\'' +
                '}';
    }
}
