package com.tubocass.controllers;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.tubocass.services.SalesService;

@RestController
@RequestMapping("/sales")
public class SalesController 
{
	/*
	 * add daily sales
	 * pull down sales based on time period e.g. 1 day or n weeks
	 * 		with possibilty that days exist withut sales
	 * update the figures for a day if necessary
	 */
	
	@Autowired SalesService salesService;
	
	@GetMapping(value = "/dailysales")
	public String getSalesData(@RequestParam(name="date")LocalDate date)
	{
		//return salesService.getSalesForDate(date);
		return "Date: " + date;
	}
	
	@GetMapping(value = "/allsales")
	public String getAllSalesData()
	{
		return salesService.getAllDailySalesRecords();
	}
}
