package com.tubocass.salestracker;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

@Entity
@Table(name = "daily_sales")
public class SalesFigure 
{

	//private int id;
	@Id
	@JsonDeserialize(using = LocalDateDeserializer.class)
	private LocalDate date;
	@Column(name = "total_sales")
	private int salesTotal; //All sales total. This could just be a method...
	@Column(name = "in_store_sales")
	private int inStoreTotal; //money taken in store as cash or credit
	@Column(name = "online_sales")
	private int onlineTotal; //money taken online
	//pickup and delivery totals. these could come from online or in-store
	
	public SalesFigure()
	{}
	
	SalesFigure(LocalDate date, int inStore, int online) //package level access
	{
		this.date = date;
		this.inStoreTotal = inStore;
		this.onlineTotal = online;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public int getInStoreTotal() {
		return inStoreTotal;
	}

	public void setInStoreTotal(int inStoreTotal) {
		this.inStoreTotal = inStoreTotal;
	}

	public int getOnlineTotal() {
		return onlineTotal;
	}

	public void setOnlineTotal(int onlineTotal) {
		this.onlineTotal = onlineTotal;
	}

	public int getSalesTotal() {
		return salesTotal;
	}
	
}
