package com.tubocass.salestracker;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.OptionalInt;
import java.util.stream.IntStream;

import com.google.gson.Gson;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
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
	
	Gson gson = new Gson();
	@Autowired SalesService salesService;
	
	@GetMapping(value = "/latestdate")
	public String getLatestDate()
	{
		LocalDate today = LocalDate.now();
		today.getDayOfWeek();
		// LocalDate lastTues = LocalDate.of(2019, 6, 18);
		return gson.toJson(today.getDayOfWeek());
	}
	
	@GetMapping(value = "/dailysales")
	public String getSalesData(@RequestParam(name="date")String date)
	{
		return gson.toJson(salesService.getSalesForDate(LocalDate.parse(date)));
//		return "Date: " + date;
	}

	@GetMapping(value = "/salesbetween")
	public String getSalesBetween(@RequestParam(name="begin")String beginDate, @RequestParam(name="end")String endDate)
	{
		return gson.toJson(salesService.getSalesBetween(LocalDate.parse(beginDate), LocalDate.parse(endDate)));
	}
	
	@GetMapping(value = "/allsales")
	public String getAllSalesData()
	{
		return gson.toJson(salesService.getAllDailySalesRecords());
	}

	@GetMapping(value = "/maxsales")
	public String getMaxSalesData(@RequestParam(name="day")DayOfWeek dayOfWeek)
	{
		OptionalInt max = salesService.getAllDailySalesRecords()
			.stream()
			.filter(day -> day.getDate().getDayOfWeek() == dayOfWeek)
			.flatMapToInt(day -> IntStream.of(day.getSalesTotal()))
			.max();
			
		return gson.toJson(max.getAsInt());
	}
	
	
	@PostMapping(consumes = "application/json")
	public SalesFigure addDailySales(@RequestBody String daily)
	{
		Gson gson = new Gson();
		SalesFigure sf = gson.fromJson(daily, SalesFigure.class);
		return salesService.addDailySales(sf);
	}

}
