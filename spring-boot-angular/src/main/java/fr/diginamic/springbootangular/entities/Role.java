package fr.diginamic.springbootangular.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String nomRole;
    // one to many relation between Role entity and user entity
    @OneToMany(mappedBy="role")
    private Set<User> users;
    public Role(){
        users=new HashSet<User>();
    }

    public Role(String nomRole) {
        this.nomRole = nomRole;
    }

    public String getNomRole() {
        return nomRole;
    }

    public void setNomRole(String nomRole) {
        this.nomRole = nomRole;
    }

    @Override
    public String toString() {
        return "Role{" +
                "nomRole='" + nomRole + '\'' +
                '}';
    }
}
