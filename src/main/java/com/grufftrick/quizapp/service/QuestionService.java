package com.grufftrick.quizapp.service;

import com.grufftrick.quizapp.Question;
import com.grufftrick.quizapp.dao.QuestionDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@Service
public class QuestionService {
    @Autowired
    QuestionDAO questionDAO;

    public List<Question> getAllQuestions() {

        return questionDAO.findAll();
    }


    public List<Question> getQuestionsByCategory(String category) {
        return questionDAO.findByCategory(category);
    }

    public String addQuestion(Question question) {
        //TODO: Add Failure text

        questionDAO.save(question);
        return "Added question successfully";
    }
}
