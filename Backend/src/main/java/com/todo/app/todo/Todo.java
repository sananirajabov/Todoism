package com.todo.app.todo;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.Date;

@Entity
@Table(name = "todo")
class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "todo_id")
    private Long todoId;

    @Column(name = "category_id")
    private int categoryId;

    @NotEmpty(message = "Enter task")
    @Column(name = "task")
    private String task;

    @Column(name = "completed")
    private int isCompeleted;

    @CreationTimestamp
    @Temporal(TemporalType.DATE)
    @Column(name = "createdAt")
    private Date createdAt;

    Todo() {
    }

    public Long getTodoId() {
        return todoId;
    }

    public void setTodoId(Long todoId) {
        this.todoId = todoId;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public int getIsCompeleted() {
        return isCompeleted;
    }

    public void setIsCompeleted(int isCompeleted) {
        this.isCompeleted = isCompeleted;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public static TodoBuilder builder;

    @Override
    public String toString() {
        return "Todo{" +
                "todoId=" + todoId +
                ", categoryId=" + categoryId +
                ", task='" + task + '\'' +
                ", isCompeleted=" + isCompeleted +
                ", createdAt=" + createdAt +
                '}';
    }
}
