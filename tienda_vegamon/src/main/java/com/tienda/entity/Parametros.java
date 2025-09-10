package com.tienda.entity;

import jakarta.annotation.Nonnull;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "parametros")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Parametros {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_parametro;
	@Nonnull
    private double iva;
	@Nonnull
    private double seguro_veh_baja;
	@Nonnull
	private double seguro_veh_media;
	@Nonnull
	private double seguro_veh_alta;
	@Nonnull
	private double seguro_veh_premium;
	@Nonnull
	private double gastos_admin;
	@Nonnull
	private double super_banco;
   
}
