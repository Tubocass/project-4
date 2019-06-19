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
	Gson gson = new Gson();
	public String getSalesForDate(LocalDate date)
	{
		//validate date param
		SalesFigure sf = repo.findByDate(date);
		return gson.toJson(sf);
	}

	public String getSalesBetween(LocalDate begin, LocalDate end)
	{
		List<SalesFigure> sf = repo.findByDateBetween(begin, end);
		return gson.toJson(sf);
	}

	public String getAllDailySalesRecords()
	{
		List<SalesFigure> sf = repo.findAll();
		return gson.toJson(sf);
	}
	
	public SalesFigure addDailySales(SalesFigure sf) 
	{
		return repo.saveAndFlush(sf); //add some transaction functionality
	}
}
