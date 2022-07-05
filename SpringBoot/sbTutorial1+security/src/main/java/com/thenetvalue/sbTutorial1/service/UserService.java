package com.thenetvalue.sbTutorial1.service;

import com.thenetvalue.sbTutorial1.dao.UserRepositoryDAO;
import com.thenetvalue.sbTutorial1.model.Ruolo;
import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    UserRepositoryDAO userDAO;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(@Qualifier("dbUserDAO") UserRepositoryDAO userDAO) {
        this.userDAO = userDAO;
    }

    public User addUser(String name, String surname, String username, String password) {
        /*user.setPassword(passwordEncoder.encode(user.getPassword()));

        User resultUser = userDAO.save(user);

        if (resultUser != null) {
            return "Utente salvato correttamente";
        } else {
            return "Errore nel salvataggio dell'utente";
        }*/
        User user = new User();
        user.setName(name);
        user.setSurname(surname);
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(Ruolo.ROLE_USER.name());
        user.setAuthorities(Ruolo.ROLE_USER.getAuthorities());
        user.setActive(true);
        user.setNotLocked(true);
        user.setEnabled(true);
        userDAO.save(user);
        return user;
    }

    public User findUserByUsername(String username) {
        return userDAO.findUserByUsername(username);
    }

    public User getUser(int id) {
        return userDAO.findById(id).get();
    }

    public User getUserByUsernameContains(String username) {
        return userDAO.findByUsernameContains(username);
    }

    public User getUserByUsernameAndPassword(String username, String password) {
        Iterable<User> resultUsers = userDAO.findByUsername(username);
        for (User user : resultUsers) {
            if(passwordEncoder.matches(password, user.getPassword())) {
                return user;
            }
        }
        return null;
    }

    public Iterable<User> allUsers() {
        return userDAO.findAll();
    }

    public String updateUser(int id, User user) {
        User userRecuperato = userDAO.findById(id).get();
        if (userRecuperato == null) {
            return "Utente non trovato!";
        }
        user.setId(id);
        User resultUser = userDAO.save(user);
        if (resultUser != null) {
            return "Utente aggiornato correttamente";
        } else {
            return "Errore nell'aggiornamento dell'utente";
        }
    }

    public String deleteUser(int id) {
        User userRecuperato = userDAO.findById(id).get();
        if (userRecuperato == null) {
            return "Utente non trovato!";
        } else {
            userDAO.delete(userRecuperato);
            return "Utente cancellato correttamente";
        }
    }

    public User userLogin(User login) {
        String psw = login.getPassword();
        if (login.getPassword() != null && login.getUsername() != null) {
            User credenziali = userDAO.findByUsernameContains(login.getUsername());
            if (credenziali.getPassword().equals(psw)) {
                return credenziali;
            }
        } else {
            return null;
        }
        return  null;
    }

}
