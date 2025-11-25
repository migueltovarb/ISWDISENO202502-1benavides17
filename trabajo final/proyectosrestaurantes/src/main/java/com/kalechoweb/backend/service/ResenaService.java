package com.kalechoweb.backend.service;

import com.kalechoweb.backend.repository.ResenaRepository;
import com.kalechoweb.backend.model.Resena;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.lang.NonNull;

@Service
public class ResenaService {
    @Autowired
    private ResenaRepository resenaRepository;

    public List<Resena> listAll() {
        return resenaRepository.findAll();
    }

    public void delete(@NonNull String id) {
        resenaRepository.deleteById(id);
    }
}
