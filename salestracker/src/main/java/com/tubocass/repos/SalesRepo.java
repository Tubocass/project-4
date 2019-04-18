package com.tubocass.repos;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tubocass.entities.SalesFigure;

@Repository
public interface SalesRepo extends JpaRepository<SalesFigure, LocalDate>
{
	public SalesFigure findByDate(@Param("date") LocalDate d);
}
