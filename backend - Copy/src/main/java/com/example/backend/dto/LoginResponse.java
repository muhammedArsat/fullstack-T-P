package com.example.backend.dto;

// LoginResponse.java

public class LoginResponse {

    private boolean success;
    private String message;

    public LoginResponse(boolean success, String message, String student) {
        this.success = success;
        this.message = message;
    }

    public LoginResponse() {
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    // Constructors, getters, and setters
}