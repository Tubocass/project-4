package com.tubocass.salestracker;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;

@Service
public class SalesService 
{
	@Autowired SalesRepo repo;
	
	public String getSalesForDate(LocalDate date)
	{
		//validate date param
		SalesFigure sf = repo.findByDate(date);
		Gson gson = new Gson();
		return gson.toJson(sf);
	}
	public String getAllDailySalesRecords()
	{
		List<SalesFigure> sf = repo.findAll();
		Gson gson = new Gson();
		return gson.toJson(sf);
	}
}
