package com.example.StockCharting.Controller;

import com.example.StockCharting.Entity.Company;
import com.example.StockCharting.Entity.StockExchange;
import com.example.StockCharting.Repository.StockExchangeRepository;
import com.example.StockCharting.Service.StockExchangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*
-getStockExchanges
-addStockExchange
-getAllCompanies
deleteExchange
 */
@RestController
@CrossOrigin(exposedHeaders = "Access-Control-Allow-Origin")
@RequestMapping("/stockexchanges")
public class StockExchangeController {
	@Autowired
	private StockExchangeService stockexchangeservice;
	
	@Autowired
	private StockExchangeRepository stockExchangeRepository;

	@GetMapping(path = "")
	public ResponseEntity<List<StockExchange>> getStockExchanges() {
		return ResponseEntity.ok(stockexchangeservice.getStockExchanges());
	}

	@PostMapping(path = "")
	public ResponseEntity<?> addStockExchange(@RequestBody StockExchange stockexchange) {
		return ResponseEntity.ok(stockexchangeservice.addStockExchange(stockexchange));
	}

	@GetMapping(path = "/{id}/companies")
	public ResponseEntity<List<Company>> getAllCompanies(@PathVariable long id) {
		return ResponseEntity.ok(stockexchangeservice.getAllCompanies(id));
	}
	
	@DeleteMapping(path = "/{id}")
	public void deleteCompany(@PathVariable long id) {
		stockExchangeRepository.deleteById(id);
		
	}

}
