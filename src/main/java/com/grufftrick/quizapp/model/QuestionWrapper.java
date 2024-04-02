package com.grufftrick.quizapp.model;

import lombok.Data;

/**
 * Wraps questions for the user.  Only includes the question id, title,
 * along with the multiple choice answers.
 */
@Data
public class QuestionWrapper {
    public QuestionWrapper(Integer id, String questionTitle, String option1, String option2, String option3) {
        this.id = id;
        this.questionTitle = questionTitle;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
    }

    private Integer id;
    private String questionTitle;
    private String option1;
    private String option2;
    private String option3;
}
