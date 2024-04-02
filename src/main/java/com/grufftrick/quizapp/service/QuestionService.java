package com.grufftrick.quizapp.service;

import com.grufftrick.quizapp.Question;
import com.grufftrick.quizapp.dao.QuestionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.*;

/**
 * Public service for the
 */
@Service
public class QuestionService {
    @Autowired
    QuestionDAO questionDAO;

    public ResponseEntity<List<Question>> getAllQuestions() {

        try {
            return new ResponseEntity<>(questionDAO.findAll(), HttpStatus.OK);
        } catch (Exception e) {
            //TODO: More informative exception logging
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }


    public ResponseEntity<List<Question>> getQuestionsByCategory(String category) {

        try {
            return new ResponseEntity<>(questionDAO.findByCategory(category), HttpStatus.OK);
        } catch (Exception e) {
            //TODO: More informative exception
            e.printStackTrace();
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

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
