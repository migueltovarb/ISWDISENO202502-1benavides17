package com.kalechoweb.backend.controller;

import com.kalechoweb.backend.service.ResenaService;
import com.kalechoweb.backend.model.Resena;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.lang.NonNull;

@RestController
@RequestMapping("/api/resenas")
@CrossOrigin(origins = "*")
public class ResenaController {
    @Autowired
    private ResenaService resenaService;

    @GetMapping
    public List<Resena> list() {
        return resenaService.listAll();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable @NonNull String id) {
        resenaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
