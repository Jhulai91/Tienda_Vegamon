package com.tienda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tienda.entity.FormLead;
import com.tienda.repository.FormLeadRepository;
import com.tienda.service.FormLeadService;
@Controller
@RequestMapping("/cotizacion")
//@SessionAttributes("quoteForm")
public class FormLeadController {

	@Autowired
    private FormLeadRepository formleadRepository;
	@Autowired
    private FormLeadService formLeadService;
	
	 @ModelAttribute("formLead")
	    public FormLead formLead() {
	        return new FormLead();
	    }
	
	 @GetMapping("/form")
	    public String showForm() {
	        return "cotizacion_form";
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
	    public String registrarPaso1(@ModelAttribute FormLead  form) {
	    	 System.out.println("Datos recibidos: " + form);
	    	 formLeadService.saveLeads(form);  
	        return "OK";
	    }
}
