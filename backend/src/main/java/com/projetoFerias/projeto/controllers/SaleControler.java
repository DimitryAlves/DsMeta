package com.projetoFerias.projeto.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoFerias.projeto.entities.Sale;
import com.projetoFerias.projeto.servicies.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleControler {
	
	@Autowired
    private SaleService service;
	
    @GetMapping
	public List<Sale> findSales(){
		return service.findSales();
		
	}
}
