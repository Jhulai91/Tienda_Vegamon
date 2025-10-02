package com.tienda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tienda.entity.FormLead;
import com.tienda.repository.FormLeadRepository;
import com.tienda.repository.VehiculoMarcaRepository;
import com.tienda.service.FormLeadService;
import com.tienda.service.VehiculoMarcaService;
@Controller
@RequestMapping("/cotizacion")
//@SessionAttributes("quoteForm")
public class FormLeadController {

	@Autowired
    private FormLeadRepository formleadRepository;
	@Autowired
    private FormLeadService formLeadService;
	@Autowired
	private VehiculoMarcaService vehiculoMarcaService;
	
	 @ModelAttribute("formLead")
	    public FormLead formLead() {
	        return new FormLead();
	    }
	
	 @GetMapping("/form")
	    public String showForm() {
	        return "cotizacion_form";
	    }
	 @GetMapping("/vehiculo_form")
	 public String mostrarVehiculoForm(Model model) {
		 model.addAttribute("formLead", new FormLead());
		    model.addAttribute("marcas", vehiculoMarcaService.listarMarcas());
	     return "vehiculo_form"; 
	 }
	 /*
	    @PostMapping("/guardar")
	    public String processForm(@ModelAttribute("formLead") FormLead form) {
	        // Aquí procesas o guardas
	      //  System.out.println("Datos recibidos: " + form.getNombre());
	        return "resumen"; // vista final
	    }
	   */
	    @PostMapping("/registrarPaso1")
	    @ResponseBody
	    public Integer registrarPaso1(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos: " + form);
	    	 FormLead saved = formLeadService.saveLeads(form); 
	    	 System.out.println("Guardado con ID: " + saved.getId_lead());
	    	 return saved.getId_lead();
	       // return "OK";
	    }
	    
	    @PostMapping("/registrarPaso2")
	    @ResponseBody
	    public String registrarPaso2(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos paso 2: " + form);
	    	if (form.getId_lead() != null) {
	            FormLead existing = formleadRepository.findById(form.getId_lead())
	                    .orElseThrow(() -> new IllegalArgumentException("Lead no encontrado"));
	            
	            // aquí actualizas los campos del paso 2
	            existing.setUsoVehiculo(form.getUsoVehiculo());
	            existing.setAntiguedad(form.getAntiguedad());
	            existing.setMayor70(form.getMayor70());
	            existing.setLicencia(form.getLicencia());
	            existing.setEsConductor(form.getEsConductor());
	            
	            formLeadService.saveLeads(existing);
	            System.out.println("Actualizado en Paso 2 con ID: " + existing.getId_lead());
	            return "OK";
	        }
	        return "ERROR";
	    }
	    
	    @PostMapping("/registrarPaso3")
	    @ResponseBody
	    public String registrarPaso3(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos paso 3: " + form);
	    	if (form.getId_lead() != null) {
	            FormLead existing = formleadRepository.findById(form.getId_lead())
	                    .orElseThrow(() -> new IllegalArgumentException("Lead no encontrado"));
	            
	            // aquí actualizas los campos del paso 2
	        //    existing.setUsoVehiculo(form.getUsoVehiculo());
	            existing.setAntiguedad(form.getAntiguedad());
	          //  existing.setMayor70(form.getMayor70());
	            //existing.setLicencia(form.getLicencia());
	            //existing.setEsConductor(form.getEsConductor());
	            
	            formLeadService.saveLeads(existing);
	            System.out.println("Actualizado en Paso 3 con ID: " + existing.getId_lead());
	            return "OK";
	        }
	        return "ERROR";
	    }
	    
	    @PostMapping("/registrarPaso4")
	    @ResponseBody
	    public String registrarPaso4(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos paso 4: " + form);
	    	if (form.getId_lead() != null) {
	            FormLead existing = formleadRepository.findById(form.getId_lead())
	                    .orElseThrow(() -> new IllegalArgumentException("Lead no encontrado"));
	            
	            // aquí actualizas los campos del paso 2
	        //    existing.setUsoVehiculo(form.getUsoVehiculo());
	          //  existing.setAntiguedad(form.getAntiguedad());
	            existing.setMayor70(form.getMayor70());
	            //existing.setLicencia(form.getLicencia());
	            //existing.setEsConductor(form.getEsConductor());
	            
	            formLeadService.saveLeads(existing);
	            System.out.println("Actualizado en Paso 4 con ID: " + existing.getId_lead());
	            return "OK";
	        }
	        return "ERROR";
	    }
	    
	    @PostMapping("/registrarPaso5")
	    @ResponseBody
	    public String registrarPaso5(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos paso 5: " + form);
	    	if (form.getId_lead() != null) {
	            FormLead existing = formleadRepository.findById(form.getId_lead())
	                    .orElseThrow(() -> new IllegalArgumentException("Lead no encontrado"));
	            
	            // aquí actualizas los campos del paso 2
	        //    existing.setUsoVehiculo(form.getUsoVehiculo());
	          //  existing.setAntiguedad(form.getAntiguedad());
	            //existing.setMayor70(form.getMayor70());
	            existing.setLicencia(form.getLicencia());
	            //existing.setEsConductor(form.getEsConductor());
	            
	            formLeadService.saveLeads(existing);
	            System.out.println("Actualizado en Paso 5 con ID: " + existing.getId_lead());
	            return "OK";
	        }
	        return "ERROR";
	    }
	    
	    @PostMapping("/registrarPaso6")
	    @ResponseBody
	    public String registrarPaso6(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos paso 6: " + form);
	    	if (form.getId_lead() != null) {
	            FormLead existing = formleadRepository.findById(form.getId_lead())
	                    .orElseThrow(() -> new IllegalArgumentException("Lead no encontrado"));
	            
	            // aquí actualizas los campos del paso 2
	        //    existing.setUsoVehiculo(form.getUsoVehiculo());
	          //  existing.setAntiguedad(form.getAntiguedad());
	            //existing.setMayor70(form.getMayor70());
	            //existing.setLicencia(form.getLicencia());
	            existing.setEsConductor(form.getEsConductor());
	            
	            formLeadService.saveLeads(existing);
	            System.out.println("Actualizado en Paso 6 con ID: " + existing.getId_lead());
	            return "OK";
	        }
	        return "ERROR";
	    }
}
