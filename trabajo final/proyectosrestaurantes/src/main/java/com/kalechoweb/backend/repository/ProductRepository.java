package com.kalechoweb.backend.repository;

import com.kalechoweb.backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
}
