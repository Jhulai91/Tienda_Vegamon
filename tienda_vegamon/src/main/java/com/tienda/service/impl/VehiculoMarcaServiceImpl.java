package com.tienda.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.tienda.dto.VehiculoMarcaDTO;
import com.tienda.entity.VehiculoMarca;
import com.tienda.repository.VehiculoMarcaRepository;
import com.tienda.service.VehiculoMarcaService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor

public class VehiculoMarcaServiceImpl implements VehiculoMarcaService {
	private final VehiculoMarcaRepository vehiculoMarcaRepository;
	@Override
	public List<VehiculoMarcaDTO> listarMarcas() {
		// TODO Auto-generated method stub
		List<VehiculoMarca> marcas = vehiculoMarcaRepository.findAll();

        return marcas.stream()
                .map(m -> new VehiculoMarcaDTO(m.getId_marca(), m.getMarca()))
                .collect(Collectors.toList());
	}

	@Override
	public List<VehiculoMarca> findAllMarcas() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VehiculoMarca saveMarcas(VehiculoMarca marca) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteMarcas(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public VehiculoMarca updateMarca(int id, VehiculoMarca marca) {
		// TODO Auto-generated method stub
		return null;
	}

}
