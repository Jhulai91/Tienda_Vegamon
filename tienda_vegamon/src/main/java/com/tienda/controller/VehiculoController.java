package com.tienda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.tienda.dto.VehiculoFormDTO;
import com.tienda.entity.FormLead;
import com.tienda.repository.VehiculoMarcaRepository;
import com.tienda.repository.VehiculoTipoRepository;
import com.tienda.service.VehiculoMarcaService;

public class VehiculoController {
	@Autowired
	private VehiculoMarcaService vehiculoMarcaService;
	@Autowired
	private VehiculoMarcaRepository vehiculoMarcaRepository;
	@Autowired
	private VehiculoTipoRepository tipoVehiculoRepository;
	public String mostrarVehiculoForm(
	        @RequestParam(required = false) String primernombre,
	        @RequestParam(required = false) String segundonombre,
	        @RequestParam(required = false) String apellidopaterno,
	        @RequestParam(required = false) String apellidomaterno,
	        @RequestParam(required = false) String telefono,
	        @RequestParam(required = false) String mail,
	     
	        Model model) {

	    model.addAttribute("primernombre", primernombre);
	    model.addAttribute("segundonombre", segundonombre);
	    model.addAttribute("apellidopaterno", apellidopaterno);
	    model.addAttribute("apellidomaterno", apellidomaterno);
	    model.addAttribute("telefono", telefono);
	    model.addAttribute("mail", mail);
	    model.addAttribute("vehiculoForm", new VehiculoFormDTO());

        // Llenar datos para los combos
        model.addAttribute("marcas", vehiculoMarcaRepository.findAll());
        model.addAttribute("tipos", tipoVehiculoRepository.findAll());
       // model.addAttribute("colores", colorVehiculoRepository.findAll());
        //model.addAttribute("extras", extraRepository.findAll());

	    return "vehiculo_form";
	}
}