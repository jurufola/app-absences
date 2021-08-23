package fr.diginamic.springbootangular.entities;

import net.bytebuddy.dynamic.loading.ClassReloadingStrategy;
import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long id;
    private String login;
    private String motDePasse;
    private String type;
    private String nom;
    private String prenom;
    @Column(name="con_rest")
    private int conges_payes_restants;
    @Column(name="rtt_rest")
    private int rtt_restants;

    @ManyToOne
    @JoinColumn(name="role_id")
    private Role role;


    @OneToMany(mappedBy="user")
    private Set<Absence> absences;
    public User(){
        absences=new HashSet<Absence>();
    }
    /* many to one relation between use entity and department entity on users
     */
    @ManyToOne
    @JoinColumn(name="dpt_id")
    /*OneToOne relation between entity and department on User manager
     */
    @OneToOne
    @JoinColumn(name="dpt_id")
    private Department department;

    public User(String login, String motDePasse,String type, String nom, String prenom, int conges_payes_restants, int rtt_restants) {
        this.type=type;
        this.login = login;
        this.motDePasse = motDePasse;
        this.nom = nom;
        this.prenom = prenom;
        this.conges_payes_restants = conges_payes_restants;
        this.rtt_restants = rtt_restants;
    }

    public Long getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }
    public String getType() {
        return login;
    }

    public void setType(String login) {
        this.type = type;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public int getConges_payes_restants() {
        return conges_payes_restants;
    }

    public void setConges_payes_restants(int conges_payes_restants) {
        this.conges_payes_restants = conges_payes_restants;
    }

    public int getRtt_restants() {
        return rtt_restants;
    }

    public void setRtt_restants(int rtt_restants) {
        this.rtt_restants = rtt_restants;
    }

    @Override
    public String toString() {
        return "User{" +
                "login='" + login + '\'' +
                ", motDePasse='" + motDePasse + '\'' +
                ", type='" + type + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", conges_payes_restants=" + conges_payes_restants +
                ", rtt_restants=" + rtt_restants +
                '}';
    }
}
