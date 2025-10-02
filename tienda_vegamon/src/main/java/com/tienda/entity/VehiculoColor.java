package com.tienda.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "vehiculo_color")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class VehiculoColor {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_color;
	@Nonnull
	private String color_descripcion;
}
