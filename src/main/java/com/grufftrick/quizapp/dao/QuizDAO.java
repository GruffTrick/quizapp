package com.grufftrick.quizapp.dao;

import com.grufftrick.quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Data Access Object for the application (implementation) layer.
 * An interface for the persistent quiz data stored in the Database.
 */
public interface QuizDAO extends JpaRepository<Quiz, Integer> {
}
