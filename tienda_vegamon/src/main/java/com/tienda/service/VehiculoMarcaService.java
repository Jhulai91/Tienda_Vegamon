package com.tienda.service;

import java.util.List;

import com.tienda.dto.VehiculoMarcaDTO;
import com.tienda.entity.FormLead;
import com.tienda.entity.VehiculoMarca;

public interface VehiculoMarcaService {
	List<VehiculoMarcaDTO> listarMarcas();
	List<VehiculoMarca> findAllMarcas();
	//List<FormLead> findAllPropietario();
    VehiculoMarca saveMarcas(VehiculoMarca marca);
    void deleteMarcas(int id);
    VehiculoMarca updateMarca(int id, VehiculoMarca marca);
}
