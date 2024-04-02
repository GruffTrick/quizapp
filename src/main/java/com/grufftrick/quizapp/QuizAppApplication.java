/**
 * @author Gruffudd Trick
 * @version 0.4
 *
 * A quiz web application, built with Spring Boot.
 * Utilises an PostgreSQL database backend to store quiz data.
 * A RESTful API allows for interaction with the database.
 */


package com.grufftrick.quizapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class QuizAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(QuizAppApplication.class, args);
	}

}
