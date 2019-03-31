package com.todo.app.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/todo")
@CrossOrigin(origins = {"http://localhost:3000"})
class TodoResource {

    @Autowired
    @Qualifier("todoService")
    private TodoService todoService;

    @GetMapping(value = "/category/{categoryId}")
    @ResponseBody
    public List<Todo> retrieveTodosByCategory(@PathVariable("categoryId") int id) {
        return this.todoService.findTodosByCategory(id);
    }

    @PostMapping
    @ResponseBody
    Todo createTodo(@RequestBody Todo todo) {
        return this.todoService.createTodo(todo);
    }

    @PutMapping(value = "/{id}")
    @ResponseBody
    Todo updateTodo(@RequestBody Todo todo, @PathVariable("id") Long id) {
        return this.todoService.updateTodo(todo, id);
    }

    @DeleteMapping(value = "/{id}")
    ResponseEntity<String> deleteTodo(@PathVariable("id") Long id) {
        this.todoService.deleteTodo(id);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping(value = "/{id}")
    @ResponseBody
    Todo retrieveTodo(@PathVariable("id") Long id) {
        return this.todoService.findTodoById(id);
    }

    @PutMapping(value = "/status/{id}")
    @ResponseBody
    ResponseEntity<String> changeTodoStatus(@PathVariable("id") Long id) {
        this.todoService.changeTodoStatus(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping(value = "/completed")
    @ResponseBody
    List<Todo> retrieveAllCompletedTodos() {
        return this.todoService.findAllCompeletedTodos();
    }

    @GetMapping(value = "/category/{categoryId}/completed")
    @ResponseBody
    List<Todo> retrieveAllCompletedTodosByCategory(@PathVariable("categoryId") int id) {
        return this.todoService.findALlCompletedTodosByCategory(id);
    }

    @GetMapping(value = "/uncompleted")
    @ResponseBody
    List<Todo> retrieveAllUncompletedTodos() {
        return this.todoService.findAllUncompletedTodos();
    }

    @GetMapping(value = "/category/{categoryId}/uncompleted")
    @ResponseBody
    List<Todo> retrieveAllUncompletedTodosByCategory(@PathVariable("categoryId") int id) {
        return this.todoService.findALlUncompletedTodosByCategory(id);
    }

    @GetMapping(value = "/category/{categoryId}/sort/{order}")
    @ResponseBody
    List<Todo> sortTodoBy(@PathVariable("categoryId") int id, @PathVariable("order") String order) {
        return this.todoService.sortTodoBy(id, order);
    }

}