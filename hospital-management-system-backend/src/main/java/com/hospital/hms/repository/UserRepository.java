package com.hospital.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hospital.hms.model.User;

public interface UserRepository extends  JpaRepository<User, String>{

}
