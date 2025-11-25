package com.kalechoweb.backend.service;

import com.kalechoweb.backend.model.Peticion;
import com.kalechoweb.backend.repository.PeticionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import org.springframework.lang.NonNull;

@Service
public class PeticionService {

    @Autowired
    private PeticionRepository peticionRepository;

    public List<Peticion> getAllActivePeticiones() {
        return peticionRepository.findByActiveTrue();
    }

    public List<Peticion> getAllPeticiones() {
        return peticionRepository.findAll();
    }

    public Peticion createPeticion(@NonNull Peticion peticion) {
        if (peticion.getCreatedBy() == null) {
            peticion.setCreatedBy("");
        }
        if (!peticion.isActive()) {
            peticion.setActive(true);
        }
        return peticionRepository.save(peticion);
    }

    public Optional<Peticion> getPeticionById(@NonNull String id) {
        return peticionRepository.findById(id);
    }

    public Peticion updatePeticion(@NonNull String id, @NonNull Peticion peticionDetails) {
        return peticionRepository.findById(id).map(p -> {
            p.setName(peticionDetails.getName());
            p.setLocation(peticionDetails.getLocation());
            p.setDescripcion(peticionDetails.getDescripcion());
            p.setActive(peticionDetails.isActive());
            return peticionRepository.save(p);
        }).orElse(null);
    }

    public void deletePeticion(@NonNull String id) {
        peticionRepository.findById(id).ifPresent(p -> {
            p.setActive(false);
            peticionRepository.save(p);
        });
    }

    public Peticion like(@NonNull String id) {
        return peticionRepository.findById(id).map(p -> {
            p.setLikes(p.getLikes() + 1);
            return peticionRepository.save(p);
        }).orElse(null);
    }

    public Peticion dislike(@NonNull String id) {
        return peticionRepository.findById(id).map(p -> {
            p.setDislikes(p.getDislikes() + 1);
            return peticionRepository.save(p);
        }).orElse(null);
    }

    public Peticion aprobar(@NonNull String id) {
        return peticionRepository.findById(id).map(p -> {
            p.setAprobada(true);
            return peticionRepository.save(p);
        }).orElse(null);
    }

    public void denegar(@NonNull String id) {
        peticionRepository.deleteById(id);
    }
}
