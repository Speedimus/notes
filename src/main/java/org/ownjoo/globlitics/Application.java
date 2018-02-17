package org.ownjoo.globlitics;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("org.ownjoo.*")
public class Application
{
	public static void main(String[] args)
	{
		SpringApplication.run(Application.class, args);
	}
}
