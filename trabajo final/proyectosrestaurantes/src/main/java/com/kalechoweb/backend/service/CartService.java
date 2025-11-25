package com.kalechoweb.backend.service;

import com.kalechoweb.backend.model.CartItem;
import com.kalechoweb.backend.model.Product;
import com.kalechoweb.backend.repository.CartItemRepository;
import com.kalechoweb.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.lang.NonNull;

@Service
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private ProductRepository productRepository;

    public List<CartItem> getUserCart(@NonNull String userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public CartItem addToCart(@NonNull String userId, @NonNull String productId, int quantity) {
        if (quantity <= 0) {
            quantity = 1;
        }

        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado"));

        if (product.getStock() <= 0) {
            throw new IllegalStateException("Producto agotado");
        }
        if (product.getStock() < quantity) {
            throw new IllegalStateException("Stock insuficiente");
        }

        Optional<CartItem> existing = cartItemRepository.findByUserIdAndProductId(userId, productId);
        CartItem item;
        if (existing.isPresent()) {
            item = existing.get();
            item.setQuantity(item.getQuantity() + quantity);
        } else {
            item = new CartItem(userId, productId, quantity);
        }

        product.setStock(product.getStock() - quantity);
        productRepository.save(product);

        return cartItemRepository.save(item);
    }

    public void removeItem(@NonNull String id) {
        cartItemRepository.deleteById(id);
    }

    public void clearCart(@NonNull String userId) {
        List<CartItem> items = cartItemRepository.findByUserId(userId);
        Objects.requireNonNull(items);
        if (!items.isEmpty()) {
            cartItemRepository.deleteAll(items);
        }
    }
}
