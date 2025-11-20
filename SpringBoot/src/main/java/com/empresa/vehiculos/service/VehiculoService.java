
package com.empresa.vehiculos.service;

import com.empresa.vehiculos.model.Vehiculo;
import com.empresa.vehiculos.repository.VehiculoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculoService {

    private final VehiculoRepository repository;

    public VehiculoService(VehiculoRepository repository) {
        this.repository = repository;
    }

    public List<Vehiculo> getAll() {
        return repository.findAll();
    }

    public Vehiculo getById(String id) {
        return repository.findById(id).orElse(null);
    }

    public Vehiculo create(Vehiculo vehiculo) {
        return repository.save(vehiculo);
    }

    public Vehiculo update(String id, Vehiculo vehiculo) {
        Vehiculo existing = repository.findById(id).orElse(null);
        if (existing == null) return null;

        existing.setMarca(vehiculo.getMarca());
        existing.setModelo(vehiculo.getModelo());
        existing.setAnio(vehiculo.getAnio());
        existing.setPrecio(vehiculo.getPrecio());

        return repository.save(existing);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }
}
