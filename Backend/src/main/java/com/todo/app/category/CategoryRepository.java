package com.todo.app.category;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository(value = "categoryRepository")
interface CategoryRepository extends JpaRepository<Category, Long> {

    @Query(value = "SELECT c FROM Category c WHERE c.category_id = :id")
    Category findOneCategoryById(@Param("id") Long id);

    @Query("SELECT c FROM Category c")
    List<Category> findAllCategories();
}
