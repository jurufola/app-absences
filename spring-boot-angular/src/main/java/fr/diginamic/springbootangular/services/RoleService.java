package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.Role;
import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public List<Role> roles(){
        return roleRepository.findAll();
    }

    public void addRole(Role newRole) {
        roleRepository.save(newRole);
    }

    /**
     * Retrieve a role from its name
     * @param name
     * @return
     */
    public Role getRoleByName(String name){
        Optional<Role> roleGet = roleRepository.findByNomRole(name);
        if(roleGet.isPresent()){ // means a result has been found in database
            return roleGet.get();
        }
        else {
            System.err.println("No role found with this name");
            return null;
        }
    }

}
