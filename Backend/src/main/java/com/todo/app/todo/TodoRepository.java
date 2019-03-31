package com.todo.app.todo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository(value = "todoRepository")
interface TodoRepository extends JpaRepository<Todo, Long> {

    @Query(value = "SELECT t FROM Todo t WHERE t.todoId = :todoId")
    Todo findOneById(@Param("todoId") Long todoId);

    @Query(value = "SELECT t FROM Todo t WHERE t.isCompeleted = 1")
    List<Todo> findAllCompletedTodos();

    @Query(value = "SELECT t FROM Todo t where t.isCompeleted = 1 AND t.categoryId = :id")
    List<Todo> findAllCompletedTodosByCategory(@Param("id") int id);

    @Query(value = "SELECT t FROM Todo t WHERE t.isCompeleted = 0")
    List<Todo> findAllUncompletedTodos();

    @Query(value = "SELECT t FROM Todo t WHERE t.isCompeleted = 0 AND t.categoryId = :categoryId")
    List<Todo> findAllUncompletedTodosByCategory(@Param("categoryId") int categoryId);

    @Query(value = "SELECT t FROM Todo t WHERE t.categoryId = :categoryId ORDER BY t.task")
    List<Todo> sortTodosByTask(@Param("categoryId") int categoryId);

    @Query(value = "SELECT t FROM Todo t WHERE t.categoryId = :categoryId ORDER BY t.createdAt")
    List<Todo> sortTodosByDate(@Param("categoryId") int categoryId);

    @Query(value = "SELECT t FROM Todo t WHERE t.categoryId = :category_id")
    List<Todo> findTodosByCategory(@Param("category_id") int categoryId);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Todo SET isCompeleted = :status WHERE todoId = :todoId")
    void changeTodoStatus(@Param("status") int status, @Param("todoId") Long todoId);
}
