package com.todo.app.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service(value = "categoryService")
public class CategoryService {

    @Autowired
    @Qualifier("categoryRepository")
    private CategoryRepository categoryRepository;

    Category findOneCategoryById(Long id) {
        return this.categoryRepository.findOneCategoryById(id);
    }

    List<Category> findAllCategories() {
        return this.categoryRepository.findAllCategories();
    }

    Category createCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    Category updateCategory(Category category, Long id) {
        final Category updateCategory = this.findOneCategoryById(id);

        if (category.getName() != null) {
            updateCategory.setName(category.getName());
        }

        if (category.getColor() != null) {
            updateCategory.setColor(category.getColor());
        }

        return this.categoryRepository.save(updateCategory);
    }

    void deleteCategory(Long id) {
        final Category category = this.categoryRepository.findOneCategoryById(id);
        this.categoryRepository.delete(category);
    }

}
