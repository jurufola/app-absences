package fr.diginamic.springbootangular.entities;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="role_id")
    private Long id;
    @Column(name="role")
    private String nomRole;
    // one to many relation between Role entity and user entity
    @OneToMany(mappedBy="role")
    private Set<User> users;
    public Role(Long id){
        this.id = id;
        users=new HashSet<User>();
    }

    public Role(Long id, String nomRole) {
        this.id = id;
        this.nomRole = nomRole;
    }

    public Long getId() {
        return id;
    }

    public Set<User> getUsers() {
        return users;
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
