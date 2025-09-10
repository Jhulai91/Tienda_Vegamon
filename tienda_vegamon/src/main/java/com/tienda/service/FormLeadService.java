package com.tienda.service;

import java.util.List;


import com.tienda.entity.FormLead;

public interface FormLeadService {
	List<FormLead> findAllLeads();
	//List<FormLead> findAllPropietario();
    FormLead saveLeads(FormLead lead);
    void deleteLeads(int id);
    FormLead updateLead(int id, FormLead lead);
}
