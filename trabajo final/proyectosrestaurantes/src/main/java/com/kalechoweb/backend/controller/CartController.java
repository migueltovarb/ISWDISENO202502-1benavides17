package com.kalechoweb.backend.controller;

import com.kalechoweb.backend.model.CartItem;
import com.kalechoweb.backend.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.lang.NonNull;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = "*")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<CartItem> getUserCart(@RequestParam @NonNull String userId) {
        return cartService.getUserCart(userId);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addToCart(@RequestBody CartItem payload) {
        if (payload == null) {
            return ResponseEntity.badRequest().body("userId y productId son requeridos");
        }
        String userId = payload.getUserId();
        String productId = payload.getProductId();
        if (userId == null || productId == null) {
            return ResponseEntity.badRequest().body("userId y productId son requeridos");
        }
        try {
            return ResponseEntity.ok(cartService.addToCart(userId, productId, payload.getQuantity()));
        } catch (IllegalStateException | IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> removeItem(@PathVariable @NonNull String id) {
        cartService.removeItem(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/clear")
    public ResponseEntity<Void> clear(@RequestParam @NonNull String userId) {
        cartService.clearCart(userId);
        return ResponseEntity.noContent().build();
    }
}
