
package com.empresa.vehiculos.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.empresa.vehiculos.model.Vehiculo;

public interface VehiculoRepository extends MongoRepository<Vehiculo, String> {
}
