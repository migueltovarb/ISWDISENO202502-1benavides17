
package com.empresa.vehiculos.controller;

import com.empresa.vehiculos.model.Vehiculo;
import com.empresa.vehiculos.service.VehiculoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehiculos")
public class VehiculoController {

    private final VehiculoService service;

    public VehiculoController(VehiculoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Vehiculo> listar() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Vehiculo obtener(@PathVariable String id) {
        return service.getById(id);
    }

    @PostMapping
    public Vehiculo crear(@RequestBody Vehiculo vehiculo) {
        return service.create(vehiculo);
    }

    @PutMapping("/{id}")
    public Vehiculo actualizar(@PathVariable String id, @RequestBody Vehiculo vehiculo) {
        return service.update(id, vehiculo);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable String id) {
        service.delete(id);
    }
}
