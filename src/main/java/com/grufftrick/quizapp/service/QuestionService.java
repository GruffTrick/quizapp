package com.grufftrick.quizapp.service;

import com.grufftrick.quizapp.model.Question;
import com.grufftrick.quizapp.dao.QuestionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionService {
    @Autowired
    QuestionDAO questionDAO;

    /**
     * Fetches all questions from the database.
     *
     * @return The list of questions in the database.
     */
    public ResponseEntity<List<Question>> getAllQuestions() {

        try {
            return new ResponseEntity<>(questionDAO.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            //TODO: More informative exception logging
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }


    /**
     * Fetches a list of questions that fit the chosen category.
     *
     * @param category The category the questions belong to.
     * @return The list of questions.
     */
    public ResponseEntity<List<Question>> getQuestionsByCategory(String category) {

        try {
            return new ResponseEntity<>(questionDAO.findByCategory(category), HttpStatus.OK);
        } catch (Exception e) {
            //TODO: More informative exception
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

    /**
     * Add a new question to the database of questions.
     *
     * @param question The question to add to the database.
     * @return Response indicating if question was added successfully or not.
     */
    public ResponseEntity<String> addQuestion(Question question) {
        try {
            questionDAO.save(question);
            return new ResponseEntity<>("Added question successfully", HttpStatus.CREATED);
        } catch (Exception e) {
            // TODO: More informative exception logging
            e.printStackTrace();
        }
        return new ResponseEntity<>("Could not add question", HttpStatus.BAD_REQUEST);
    }

    /**
     * Delete a Question from the database of questions.
     *
     * @param question The question to delete.
     * @return Response to indicate if deletion was successful.
     */
    public ResponseEntity<String> deleteQuestion(Question question) {
        try {
            questionDAO.delete(question);
            return new ResponseEntity<>("Deleted Question Successfully.", HttpStatus.OK);
        } catch (Exception e) {
            // TODO: More informative exception logging
            e.printStackTrace();
        }
        return new ResponseEntity<>("Could not delete question", HttpStatus.BAD_REQUEST);
    }
}
