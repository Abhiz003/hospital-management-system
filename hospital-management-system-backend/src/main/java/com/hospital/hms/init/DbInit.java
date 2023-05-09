package com.hospital.hms.init;


import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hospital.hms.model.User;
import com.hospital.hms.repository.UserRepository;

@Component
public class DbInit {

    @Autowired
    private UserRepository userRepository;

    @PostConstruct
    private void createUser() {
        User user1 = new User();
        user1.setFirstName("Kunal");
        user1.setLastName("Bhangale");
        userRepository.save(user1);
    }
}
