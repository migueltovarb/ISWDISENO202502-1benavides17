package com.kalechoweb.backend.service;

import com.kalechoweb.backend.model.CartItem;
import com.kalechoweb.backend.model.Order;
import com.kalechoweb.backend.model.OrderItem;
import com.kalechoweb.backend.model.Product;
import com.kalechoweb.backend.repository.CartItemRepository;
import com.kalechoweb.backend.repository.OrderRepository;
import com.kalechoweb.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.lang.NonNull;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    public List<Order> listAll() {
        return orderRepository.findAll();
    }

    public List<Order> listByUser(@NonNull String userId) {
        return orderRepository.findByUserId(userId);
    }

    public Optional<Order> findById(@NonNull String id) {
        return orderRepository.findById(id);
    }

    public Order createFromCart(@NonNull String userId) {
        List<CartItem> items = cartItemRepository.findByUserId(userId);
        if (items == null || items.isEmpty()) {
            throw new IllegalStateException("El carrito está vacío");
        }

        Order order = new Order();
        order.setUserId(userId);
        List<OrderItem> orderItems = new ArrayList<>();
        double total = 0.0;

        for (CartItem ci : items) {
            String pid = ci.getProductId();
            if (pid == null) {
                throw new IllegalArgumentException("Producto inválido en carrito");
            }
            Product p = productRepository.findById(pid)
                    .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado: " + ci.getProductId()));
            OrderItem oi = new OrderItem(p.getId(), ci.getQuantity(), p.getPrice());
            orderItems.add(oi);
            total += p.getPrice() * ci.getQuantity();
        }

        order.setItems(orderItems);
        order.setTotal(total);
        Order saved = orderRepository.save(order);

        cartItemRepository.deleteAll(items);

        return saved;
    }

    public Order accept(@NonNull String id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Pedido no encontrado"));
        order.setStatus("ACCEPTED");
        return orderRepository.save(order);
    }

    public void reject(@NonNull String id) {
        orderRepository.deleteById(id);
    }
}
