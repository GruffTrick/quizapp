/**
 * @author Gruffudd Trick
 * @version 0.1
 *
 * A quiz application, built with Spring Boot.
 * Utilises an PostgreSQL database backend to store quiz data.
 * A RESTful API allows interaction with the implementation.
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
