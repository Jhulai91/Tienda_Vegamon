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
@Table(name = "leads")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class FormLead {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id_lead;
	@Nonnull
	private String primernombre;
	@Nonnull
	private String segundonombre;
	@Nonnull
	private String apellidopaterno;
	@Nonnull
	private String apellidomaterno;
	@Nonnull
	private String telefono;
	@Nonnull
	private String email;
	
	private String usoVehiculo;
	
	private String antiguedad;
	
	private Boolean mayor70;
	
	private Boolean licencia;
	
	private Boolean esConductor;
	
}
