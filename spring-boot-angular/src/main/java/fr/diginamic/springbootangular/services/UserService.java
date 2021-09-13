package fr.diginamic.springbootangular.services;

import fr.diginamic.springbootangular.entities.User;
import fr.diginamic.springbootangular.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public List<User> users(){
        return userRepository.findAll();
    }

    /**
     * Retrieve a user in database from its login
     * @param login
     * @return
     */
    public User getUserByLogin(String login){
        Optional<User> userGet = userRepository.findByLogin(login);
        if(userGet.isPresent()){ // means a result has been found in database
            return userGet.get();
        }
        else {
            System.err.println("No user found with this login");
            return null;
        }
    }

    public User getUserByLoginPassword(String login, String password){
        Optional<User> userGet = userRepository.findByLoginAndMotDePasse(login, password);
        if(userGet.isPresent()){ // means a result has been found in database
            return userGet.get();
        }
        else {
            System.err.println("No user found with this login and password");
            return null;
        }
    }

    /**
     * Add new user in database
     * @param newUser
     */
    public void addUser(User newUser) {
        // 1 - We check if the user not already exist in database
        Optional<User> userAlreadyIn = userRepository.findByLogin(newUser.getLogin());
        if(userAlreadyIn.isPresent()){
            System.out.println("This user already exist in database");
        }
        else {
            // 2 - Encrypt password of newUser
            userAlreadyIn.get().setMotDePasse(encryptPassword(newUser.getMotDePasse(), newUser));
            // 3 - We save the new user in the database
            userRepository.save(newUser);
            System.out.println(newUser.getLogin() + " added to database");
        }
    }

    /**
     * Update the user exist in database
     * @param userId
     * @param user
     */
    public void updateUser(long userId, User user){
        Optional<User> userData = userRepository.findById(userId);
        if(userData.isPresent()){
            User userToUpdate = userData.get();
            userToUpdate.setLogin(user.getLogin());
            userToUpdate.setMotDePasse(user.getMotDePasse());
            userToUpdate.setNom(user.getNom());
            userToUpdate.setPrenom(user.getPrenom());
            userToUpdate.setCongesPayesRestants(user.getCongesPayesRestants());
            userToUpdate.setRttRestants(user.getRttRestants());
            userToUpdate.setRole(user.getRole());
        }
        else {
            System.out.println("No user corresponding to this id in database");
        }

    }

    /**
     * Encrypt user password exist in database
     * @param motDePasse
     * @param user
     * @return
     */
    public String encryptPassword(String motDePasse, User user){

        Optional<User> userPassword = userRepository.findByMotDePasse(motDePasse);
        if(userPassword.isPresent()){
            User passwordEncrypt = userPassword.get();
            motDePasse = " ";
            for(int i = 0; i < motDePasse.length(); i++){
                int c=user.getMotDePasse().charAt(i)^48;
                motDePasse=motDePasse+(char)c;
            }
            passwordEncrypt.setMotDePasse(user.getMotDePasse());
        }

        return motDePasse;
    }

}
