package com.kalechoweb.backend.repository;

import com.kalechoweb.backend.model.Resena;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ResenaRepository extends MongoRepository<Resena, String> {
}
