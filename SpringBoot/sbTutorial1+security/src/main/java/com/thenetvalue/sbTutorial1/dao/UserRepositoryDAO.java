package com.thenetvalue.sbTutorial1.dao;

import com.thenetvalue.sbTutorial1.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("dbUserDAO")
public interface UserRepositoryDAO extends CrudRepository<User, Integer> {
    User findByUsernameContains(String username);

    @Query("SELECT u FROM User u WHERE LOWER(u.username) = LOWER(:username) and u.password = :password")
    List<User> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);

    User findUserByUsername(String username);

    List<User> findByUsername(String username);

}
