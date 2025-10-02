package com.tienda.service;

import java.util.List;

import com.tienda.dto.VehiculoMarcaDTO;
import com.tienda.entity.VehiculoMarca;
import com.tienda.entity.VehiculoTipo;

public interface VehiculoTipoService {
	//List<VehiculoFomDTO> listarMarcas();
	List<VehiculoTipo> findAllTipo();
	//List<FormLead> findAllPropietario();
 //   VehiculoMarca saveMarcas(VehiculoMarca marca);
 //   void deleteMarcas(int id);
 //   VehiculoMarca updateMarca(int id, VehiculoMarca marca);
}
