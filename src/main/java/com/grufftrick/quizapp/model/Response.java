package com.grufftrick.quizapp.model;

import lombok.Data;
import lombok.RequiredArgsConstructor;

/**
 * Model for a user's response to a question.
 */
@Data
@RequiredArgsConstructor
public class Response {
    private Integer id;
    private String response;
}
