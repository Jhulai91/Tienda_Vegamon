package com.tienda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tienda.entity.VehiculoMarca;
import com.tienda.entity.VehiculoTipo;

public interface VehiculoTipoRepository extends JpaRepository<VehiculoTipo, Integer> {

}
