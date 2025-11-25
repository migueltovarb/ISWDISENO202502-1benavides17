package com.kalechoweb.backend.controller;

import com.kalechoweb.backend.model.Product;
import com.kalechoweb.backend.model.User;
import com.kalechoweb.backend.repository.UserRepository;
import com.kalechoweb.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.lang.NonNull;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<Product> listAll() {
        return productService.listAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable @NonNull String id) {
        return productService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestParam String adminUserId, @RequestBody Product product) {
        if (adminUserId == null) {
            return ResponseEntity.badRequest().body("adminUserId es requerido");
        }
        if (!isAdmin(adminUserId)) {
            return ResponseEntity.status(403).body("Solo un admin puede crear productos");
        }
        if (product == null) {
            return ResponseEntity.badRequest().body("Producto es requerido");
        }
        return ResponseEntity.ok(productService.create(product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@RequestParam String adminUserId, @PathVariable @NonNull String id) {
        if (adminUserId == null) {
            return ResponseEntity.badRequest().body("adminUserId es requerido");
        }
        if (!isAdmin(adminUserId)) {
            return ResponseEntity.status(403).body("Solo un admin puede eliminar productos");
        }
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    private boolean isAdmin(@NonNull String userId) {
        return userRepository.findById(userId)
                .map(User::getRole)
                .map("ADMIN"::equalsIgnoreCase)
                .orElse(false);
    }
}
