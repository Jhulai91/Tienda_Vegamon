package com.tienda.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

public class ClienteController {

	
	 @GetMapping("/vehiculos")
	    public String login(@RequestParam(value = "error", required = false) String error,
             @RequestParam(value = "mensaje", required = false) String mensaje,
             Model model) {
		 
		 if (mensaje != null) {
			    model.addAttribute("error", mensaje);
			}

	        return "login"; 
	    }
}
