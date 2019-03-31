package com.todo.app.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/category")
@CrossOrigin(origins = {"http://localhost:3000"})
class CategoryResource {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    @ResponseBody
    List<Category> retrieveAllCategories() {
        return this.categoryService.findAllCategories();
    }

    @GetMapping(value = "/{categoryId}")
    @ResponseBody
    Category retrieveCategoryById(@PathVariable("categoryId") Long categoryId) {
        return this.categoryService.findOneCategoryById(categoryId);
    }

    @PostMapping
    @ResponseBody
    Category createCategory(@RequestBody Category category) {
        return this.categoryService.createCategory(category);
    }

    @PutMapping(value = "/{categoryId}")
    @ResponseBody
    Category updateCategory(@RequestBody Category category, @PathVariable("categoryId") Long categoryId) {
        return this.categoryService.updateCategory(category, categoryId);
    }

    @DeleteMapping(value = "/{categoryId}")
    ResponseEntity<String> deleteCategory(@PathVariable("categoryId") Long categoryId) {
        this.categoryService.deleteCategory(categoryId);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
