package com.tienda.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "vehiculo")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Vehiculo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_vehiculo;
	
	 // Relación con Marca
    @ManyToOne
    @JoinColumn(name = "modelo_id", nullable = false) // FK en tabla vehiculo
    private VehiculoModelo modelo;
	

    // Relación con TipoVehiculo
    @ManyToOne
    @JoinColumn(name = "tipo_id", nullable = false) // FK en tabla vehiculo
    private VehiculoTipo tipo;
    
    // Relación con TipoVehiculo
    @ManyToOne
    @JoinColumn(name = "color_id", nullable = false) // FK en tabla vehiculo
    private VehiculoColor color;
	
    @Nonnull
	private Double vehiculo_valor;
    @Nonnull
    private Integer vehiculo_anio;
    @Nonnull
    private Double vehiculo_valor_extras;
    @Nonnull
    private Integer vehiculo_detalle_extras;
    
}
