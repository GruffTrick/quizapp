package com.grufftrick.quizapp.service;

import com.grufftrick.quizapp.dao.QuestionDAO;
import com.grufftrick.quizapp.dao.QuizDAO;
import com.grufftrick.quizapp.model.Question;
import com.grufftrick.quizapp.model.QuestionWrapper;
import com.grufftrick.quizapp.model.Quiz;
import com.grufftrick.quizapp.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class QuizService {
    @Autowired
    QuizDAO quizDAO;
    @Autowired
    QuestionDAO questionDAO;

    public ResponseEntity<String> createQuiz(String category, int numQ, String title) {
        List<Question> questionsList = questionDAO.findRandomQuestionsByCategory(category, numQ);

        Quiz quiz = new Quiz();
        quiz.setTitle(title);
        quiz.setQuestions(questionsList);
        quizDAO.save(quiz);

        return new ResponseEntity<>("Successfully created quiz", HttpStatus.CREATED);
    }

    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(Integer id) {
        Optional<Quiz> quiz = quizDAO.findById(id);
        List<Question> questionsFromDB = quiz.get().getQuestions();

        List<QuestionWrapper> questionsForUser = new ArrayList<>();
        for (Question q : questionsFromDB) {
            QuestionWrapper qw = new QuestionWrapper(q.getId(), q.getQuestionTitle(), q.getOption1(), q.getOption2(), q.getOption3());
            questionsForUser.add(qw);
        }

        return new ResponseEntity<>(questionsForUser, HttpStatus.OK);
    }

    public ResponseEntity<Integer> calculateResult(Integer id, List<Response> responses) {
        Quiz quiz = quizDAO.findById(id).get();
        List<Question> questions = quiz.getQuestions();
        int correctAnswers = 0;
        int count = 0;
        for (Response response : responses) {
            if(response.getResponse().equals(questions.get(count).getCorrectAnswer())) {
                correctAnswers++;
            }
            count++;
        }
        return new ResponseEntity<>(correctAnswers, HttpStatus.OK);
    }
}
