import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todo from '../todo/Todo';
import AddCategory from '../category/AddCategory';
import AddTodo from '../todo/AddTodo';
import Modal from '../dialog/Modal';
import Service from "../service/Service";
import ListItem from "@material-ui/core/ListItem";
import Category from "../category/Category";
import CompletedCategory from '../category/CompletedCategory';
import Drawer from "@material-ui/core/Drawer";
import classNames from 'classnames';

const styles = theme => ({
    item: {
        paddingTop: 4,
        paddingBottom: 4,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
        marginTop: 3,
        marginBottom: 15,
        backgroundColor: '#282828',
    },
    appName: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
        backgroundColor: '#282828',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 253,
            flexShrink: 0,
        },
    },
});

class Content extends Service {
    render() {
        const {classes, ...other} = this.props;

        return (
            <Paper>
                {/*Category*/}
                <Drawer
                    variant="permanent" {...other}
                >
                    <List disablePadding>
                        {/* App name */}
                        <ListItem className={classNames(classes.appName, classes.item, classes.itemCategory)}>
                            Todoism
                        </ListItem>

                        {/*Categories*/}
                        <CompletedCategory
                            key={1}
                            name="Today"
                            clickCategory={this.clickCategory.bind(this, 1)}
                        />
                        {this.state.categories.map(category => (
                            category.category_id !== 1 &&
                            <Category
                                key={category.category_id + ""}
                                name={category.name}
                                clickCategory={this.clickCategory.bind(this, category.category_id)}
                                editOnClick={this.getCategoryId.bind(this, category.category_id)}
                                deleteOnClick={this.deleteCategory.bind(this, category.category_id)}
                            />
                        ))}
                        <CompletedCategory
                            key={99999}
                            name="Completed"
                            clickCategory={this.clickCategory.bind(this, 99999)}
                        />
                    </List>

                    {/*Add Category input*/}
                    <AddCategory
                        onSubmit={this.addCategory.bind(this)}
                        textFieldValue={this.state.addCategory}
                        textFieldOnChange={this.getCategory.bind(this)}
                        addOnClick={this.addCategory}
                        cancelOnClick={this.cancelCategory}
                        error={this.state.addCategoryError}
                    />

                    {/*Edit dialog box*/}
                    <Modal
                        open={this.state.categoryOpen}
                        textAreaValue={this.state.updateCategory}
                        textAreaOnChange={this.getCategoryOnUpdate.bind(this)}
                        saveOnClick={this.updateCategory.bind(this)}
                        cancelOnClick={this.closeCategoryDialog}
                        error={this.state.updateCategoryError}
                    />
                </Drawer>

                {/*Content*/}
                <List>
                    {/*List todos*/}
                    {this.state.todos.map(todo => (
                        <Todo
                            key={todo.todoId}
                            status={todo.isCompeleted === 1}
                            text={todo.task}
                            checkboxOnChange={this.changeStatus.bind(this, todo.todoId)}
                            editOnClick={this.getTodoId.bind(this, todo.todoId)}
                            deleteOnClick={this.deleteTodo.bind(this, todo.todoId)}
                        />
                    ))}
                </List>

                {
                    this.state.id !== 99999 && (
                        <AddTodo
                            onSubmit={this.addTodo.bind(this)}
                            textFieldValue={this.state.addTodo}
                            textFieldOnChange={this.getTodo.bind(this)}
                            addOnClick={this.addTodo}
                            cancelOnClick={this.cancelTodo}
                            error={this.state.addTodoError}
                        />
                    )
                }

                {/*Edit to do dialog box*/}
                <Modal
                    open={this.state.todoOpen}
                    textAreaValue={this.state.updateTodo}
                    textAreaOnChange={this.getTodoOnUpdate.bind(this)}
                    saveOnClick={this.updateTodo.bind(this)}
                    cancelOnClick={this.closeTodoDialog}
                    error={this.state.updateTodoError}
                />
            </Paper>
        );
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);