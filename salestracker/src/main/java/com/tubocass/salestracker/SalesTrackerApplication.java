package com.tubocass.salestracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;

@Controller
@SpringBootApplication
//@ComponentScan(basepackages)
public class SalesTrackerApplication {

	public static void main(String[] args) {
		SpringApplication.run(SalesTrackerApplication.class, args);
	}
	
	// @ResponseBody
	// @GetMapping(value="/hello")
	// public String Hello()
	// {
	// 	return "Hello";
	// }
}
