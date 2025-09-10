package com.tienda.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tienda.entity.FormLead;
import com.tienda.repository.FormLeadRepository;
import com.tienda.service.FormLeadService;
@Service
public class FormLeadServiceImpl implements FormLeadService {

	@Autowired
    private FormLeadRepository formleadRepository;
	@Override
	public List<FormLead> findAllLeads() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FormLead saveLeads(FormLead lead) {
		// TODO Auto-generated method stub
		return formleadRepository.save(lead);
	}

	@Override
	public void deleteLeads(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public FormLead updateLead(int id, FormLead lead) {
		// TODO Auto-generated method stub
		return null;
	}

}
