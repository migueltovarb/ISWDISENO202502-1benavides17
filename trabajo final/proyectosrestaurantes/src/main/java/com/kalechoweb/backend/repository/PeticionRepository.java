package com.kalechoweb.backend.repository;

import com.kalechoweb.backend.model.Peticion;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface PeticionRepository extends MongoRepository<Peticion, String> {
    List<Peticion> findByActiveTrue();
}
