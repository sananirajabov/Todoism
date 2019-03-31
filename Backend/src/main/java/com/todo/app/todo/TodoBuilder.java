package com.todo.app.todo;

import java.util.Date;

class TodoBuilder {

    private Long todoId;
    private int categoryId;
    private String task;
    private int isCompleted;
    private Date createdAt;

    TodoBuilder(String task) {
        this.task = task;
    }

    TodoBuilder setTodoId(Long todoId) {
        this.todoId = todoId;
        return this;
    }

    TodoBuilder setCategoryId(int categoryId) {
        this.categoryId = categoryId;
        return this;
    }

    TodoBuilder setICompleted(int isCompleted) {
        this.isCompleted = isCompleted;
        return this;
    }

    TodoBuilder setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
        return this;
    }

    Todo build() {
        Todo todo = new Todo();
        todo.setTodoId(this.todoId);
        todo.setTask(this.task);
        todo.setCategoryId(this.categoryId);
        todo.setIsCompeleted(this.isCompleted);
        todo.setCreatedAt(this.createdAt);

        return todo;
    }
}
