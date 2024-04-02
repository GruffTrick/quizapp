package com.grufftrick.quizapp.dao;

import com.grufftrick.quizapp.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


/**
 * Data Access Object for the application (implementation) layer.
 * An interface for the persistent quiz data stored in the Database.
 */
@Repository
public interface QuestionDAO extends JpaRepository<Question, Integer> {

    /**
     * Finds every question in the database that matches the selected category,
     * returning them as a list collection.
     *
     * @param category Category of the questions stored in the database (e.g. JAVA/PYTHON).
     * @return List collection of questions that belong to the chosen category.
     */
    List<Question> findByCategory(String category);

    @Query(value = "SELECT * FROM question q Where q.category=:category ORDER BY RANDOM() LIMIT :numQ", nativeQuery = true)
    List<Question> findRandomQuestionsByCategory(String category, int numQ);
}
