package com.grufftrick.quizapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

/**
 * Model Class for the Question Object Type
 * Each question has its own unique identifier, followed by attributes.
 * Each question has a Title (question form), category and selectable options (answers),
 * and a single correct answer.
 */
@Data
@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String questionTitle;
    private String category;
    private String option1;
    private String option2;
    private String option3;
    private String correctAnswer;
    private String difficultyLevel;
}
