package com.tienda.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vehiculo_modelo")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiculoModelo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_modelo;
	@Nonnull
	private String modelo_descripcion;
	// Relación con TipoVehiculo
    @ManyToOne
    @JoinColumn(name = "marca_id", nullable = false) // FK en tabla vehiculo
    private VehiculoMarca marca;
}
