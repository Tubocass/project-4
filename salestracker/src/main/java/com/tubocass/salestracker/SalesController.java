package com.tubocass.salestracker;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;


@RequestMapping("/sales")
@RestController
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
	public String getSalesData(@RequestParam(name="date")String date)
	{
		return salesService.getSalesForDate(LocalDate.parse(date));
//		return "Date: " + date;
	}
	
	@GetMapping(value = "/allsales")
	public String getAllSalesData()
	{
		return salesService.getAllDailySalesRecords();
	}
	
	@PostMapping(consumes = "application/json")
	public void addDailySales(@RequestBody String daily)
	{
		Gson gson = new Gson();
		SalesFigure sf = gson.fromJson(daily, SalesFigure.class);
		salesService.addDailySales(sf);
	}
}
