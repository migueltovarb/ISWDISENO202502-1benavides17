package com.kalechoweb.backend.controller;

import com.kalechoweb.backend.model.Peticion;
import com.kalechoweb.backend.service.PeticionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.lang.NonNull;

import java.util.List;

@RestController
@RequestMapping("/api/peticiones")
@CrossOrigin(origins = "*")
public class PeticionController {

    @Autowired
    private PeticionService peticionService;

    @GetMapping
    public List<Peticion> getAllPeticiones(@RequestParam(required = false, defaultValue = "true") boolean activeOnly) {
        if (activeOnly) {
            return peticionService.getAllActivePeticiones();
        }
        return peticionService.getAllPeticiones();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Peticion> getPeticionById(@PathVariable @NonNull String id) {
        return peticionService.getPeticionById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Peticion createPeticion(@RequestBody @NonNull Peticion peticion) {
        return peticionService.createPeticion(peticion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Peticion> updatePeticion(@PathVariable @NonNull String id, @RequestBody @NonNull Peticion peticion) {
        Peticion updated = peticionService.updatePeticion(id, peticion);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePeticion(@PathVariable @NonNull String id) {
        peticionService.deletePeticion(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/like")
    public ResponseEntity<?> like(@PathVariable @NonNull String id) {
        Peticion p = peticionService.like(id);
        return p != null ? ResponseEntity.ok(p) : ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/dislike")
    public ResponseEntity<?> dislike(@PathVariable @NonNull String id) {
        Peticion p = peticionService.dislike(id);
        return p != null ? ResponseEntity.ok(p) : ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/aprobar")
    public ResponseEntity<?> aprobar(@PathVariable @NonNull String id) {
        Peticion p = peticionService.aprobar(id);
        return p != null ? ResponseEntity.ok(p) : ResponseEntity.notFound().build();
    }

    @PostMapping("/{id}/denegar")
    public ResponseEntity<Void> denegar(@PathVariable @NonNull String id) {
        peticionService.denegar(id);
        return ResponseEntity.noContent().build();
    }
}
