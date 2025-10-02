package com.tienda.dto;

import java.util.List;

import lombok.Data;

@Data
public class VehiculoFormDTO {
	private Integer marcaId;
    private Integer modeloId;
    private String tipo;
    private String color;
    private Integer anio;
    private Double valorVehiculo;
    private List<Integer> extrasSeleccionados;  // Para los checkboxes
    private Double valorExtras;
}
