package com.kalechoweb.backend.controller;

import com.kalechoweb.backend.model.Order;
import com.kalechoweb.backend.model.User;
import com.kalechoweb.backend.repository.UserRepository;
import com.kalechoweb.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.lang.NonNull;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<?> listAll(@RequestParam String adminUserId) {
        if (adminUserId == null) {
            return ResponseEntity.badRequest().body("adminUserId es requerido");
        }
        if (!isAdmin(adminUserId)) {
            return ResponseEntity.status(403).body("Solo un admin puede listar pedidos");
        }
        return ResponseEntity.ok(orderService.listAll());
    }

    @GetMapping("/mine")
    public List<Order> myOrders(@RequestParam @NonNull String userId) {
        return orderService.listByUser(userId);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getById(@PathVariable @NonNull String id) {
        return orderService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestParam @NonNull String userId) {
        try {
            return ResponseEntity.ok(orderService.createFromCart(userId));
        } catch (IllegalStateException | IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/{id}/accept")
    public ResponseEntity<?> accept(@RequestParam String adminUserId, @PathVariable @NonNull String id) {
        if (adminUserId == null) {
            return ResponseEntity.badRequest().body("adminUserId es requerido");
        }
        if (!isAdmin(adminUserId)) {
            return ResponseEntity.status(403).body("Solo un admin puede aceptar pedidos");
        }
        return ResponseEntity.ok(orderService.accept(id));
    }

    @PostMapping("/{id}/reject")
    public ResponseEntity<?> reject(@RequestParam String adminUserId, @PathVariable @NonNull String id) {
        if (adminUserId == null) {
            return ResponseEntity.badRequest().body("adminUserId es requerido");
        }
        if (!isAdmin(adminUserId)) {
            return ResponseEntity.status(403).body("Solo un admin puede rechazar pedidos");
        }
        orderService.reject(id);
        return ResponseEntity.noContent().build();
    }

    private boolean isAdmin(@NonNull String userId) {
        return userRepository.findById(userId)
                .map(User::getRole)
                .map("ADMIN"::equalsIgnoreCase)
                .orElse(false);
    }
}
