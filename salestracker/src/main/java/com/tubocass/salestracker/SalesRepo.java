package com.tubocass.salestracker;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRepo extends JpaRepository<SalesFigure, LocalDate>
{
	public SalesFigure findByDate(@Param("date") LocalDate d);
	@Query(value = "select * from daily_sales order by date", nativeQuery = true)
	public List<SalesFigure> findAllOrderByDate();
	public List<SalesFigure> findByDateBetween(@Param("begin") LocalDate beginDate, @Param("end") LocalDate enDate);
	//select ROUND( AVG(total_sales),0) sales_avg from daily_sales where extract(month from date) = varMonth

}
