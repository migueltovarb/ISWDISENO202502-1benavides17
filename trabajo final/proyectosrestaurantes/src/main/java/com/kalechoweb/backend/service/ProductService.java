package com.kalechoweb.backend.service;

import com.kalechoweb.backend.model.Product;
import com.kalechoweb.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.lang.NonNull;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> listAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(@NonNull String id) {
        return productRepository.findById(id);
    }

    public Product create(@NonNull Product product) {
        return productRepository.save(product);
    }

    public void delete(@NonNull String id) {
        productRepository.deleteById(id);
    }
}
