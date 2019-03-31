package com.todo.app.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "todoService")
class TodoService {

    @Autowired
    @Qualifier("todoRepository")
    private TodoRepository todoRepository;

    Todo createTodo(Todo todo) {
        return this.todoRepository.save(todo);
    }

    Todo updateTodo(Todo todo, Long id) {
        final Todo updateTodo =  this.findTodoById(id);

        if (todo.getTask() != null) {
            updateTodo.setTask(todo.getTask());
        }

        if (todo.getCategoryId() != 0) {
            updateTodo.setCategoryId(todo.getCategoryId());
        }

        return this.todoRepository.save(updateTodo);
    }

    List<Todo> findTodosByCategory(int categoryId) {
        return this.todoRepository.findTodosByCategory(categoryId);
    }

    Todo findTodoById(Long todoId) {
        return this.todoRepository.findOneById(todoId);
    }

    void deleteTodo(Long id) {
        final Todo todo = this.findTodoById(id);
        this.todoRepository.delete(todo);
    }

    void changeTodoStatus(Long id) {
        Todo todo = this.todoRepository.findOneById(id);
        int status = todo.getIsCompeleted() == 1 ? 0 : 1;
        this.todoRepository.changeTodoStatus(status, id);
    }

    List<Todo> findAllCompeletedTodos() {
        return this.todoRepository.findAllCompletedTodos();
    }

    List<Todo> findALlCompletedTodosByCategory(int id) {
        return this.todoRepository.findAllCompletedTodosByCategory(id);
    }

    List<Todo> findAllUncompletedTodos() {
        return this.todoRepository.findAllUncompletedTodos();
    }

    List<Todo> findALlUncompletedTodosByCategory(int id) {
        return this.todoRepository.findAllUncompletedTodosByCategory(id);
    }

    List<Todo> sortTodoBy(int id, String order) {
        if (order.equalsIgnoreCase("task")) {
            return this.todoRepository.sortTodosByTask(id);
        }

        return this.todoRepository.sortTodosByDate(id);
    }

}
