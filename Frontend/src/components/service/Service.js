import React from 'react';
import axios from "axios";

class Service extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
            todoId: 0,
            categoryId: 0,
            todoOpen: false,
            categoryOpen: false,
            todoStatus: false,
            addTodo: '',
            addCategory: '',
            addTodoError: false,
            addCategoryError: false,
            updateTodo: '',
            updateCategory: '',
            updateTodoError: false,
            updateCategoryError: false,
            todos: [],
            categories: [],
            mobileOpen: false,
        };
    }

    componentDidMount() {
        axios.get("http://localhost:9090/todo/category/" + this.state.selected + "/uncompleted")
            .then(res => {
                const todos = res.data;
                this.setState({todos: todos});
            })
            .catch(error => {
                console.log("Error: " + error);
            });

        axios.get('http://localhost:9090/category')
            .then(res => {
                const categories = res.data;
                this.setState({categories: categories});
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    };

    refreshPage = () => {
        window.location.reload();
    };

    //--------------------------------To do Functions-------------------------------
    listTodosByCategory = (id) => {
        if (id === 99999) {
            this.listCompletedTodos();
        } else {
            this.listUncompletedTodosByCategory(id);
        }
    };

    listUncompletedTodosByCategory = (id) => {
        axios.get("http://localhost:9090/todo/category/" + id + "/uncompleted")
            .then(res => {
                const todos = res.data;
                this.setState({todos: todos});
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    };

    listCompletedTodos = () => {
        axios.get("http://localhost:9090/todo/completed")
            .then(res => {
                const todos = res.data;
                this.setState({todos: todos});
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    };

    addTodo = (event) => {
        event.preventDefault();

        if (this.state.addTodo === '') {
            this.setState({addTodoError: true})
        } else {
            const data = {
                categoryId: this.state.selected,
                task: this.state.addTodo,
                icCompleted: 0
            };

            axios.post("http://localhost:9090/todo", data)
                .catch(error => {
                   console.log(error);
                });

            this.setState({addTodo: "", addTodoError: false});

            this.refreshPage();
        }
    };

    getTodo = (event) => {
        this.setState({
            addTodo: event.target.value
        })
    };

    updateTodo = () => {
        if (this.state.updateTodo === '') {
            this.setState({updateTodoError: true});
        } else {
            const data = {
                task: this.state.updateTodo
            };

            axios.put("http://localhost:9090/todo/" + this.state.todoId, data)
                .catch(error => {
                    console.log(error);
                });

            this.setState({
                todoId: 0,
                updateTodo: "",
                updateTodoError: false
            });

            this.closeTodoDialog();
            this.refreshPage();
        }
    };

    getTodoOnUpdate = (event) => {
        this.setState({updateTodo: event.target.value});
    };

    getTodoId = (id) => {
        this.openTodoDialog();

        axios.get("http://localhost:9090/todo/" + id)
            .then(res => {
                this.setState({updateTodo: res.data.task, todoId: id});
            })
            .catch(error => {
                console.log(error);
            });

    };

    changeStatus = (id) => {
        axios.put("http://localhost:9090/todo/status/" + id)
            .catch(error => {
                console.log(error);
            });

        this.refreshPage();
    };

    deleteTodo = (id) => {
        axios.delete("http://localhost:9090/todo/" + id)
            .catch(error => {
                console.log(error);
            });

        this.refreshPage();
    };

    cancelTodo = () => {
        this.setState({
            addTodo: "",
            addTodoError: false,
        });
    };

    openTodoDialog = () => {
        this.setState({todoOpen: true});
    };

    closeTodoDialog = () => {
        this.setState({
            todoOpen: false,
            updateTodoError: false,
        });
    };

    //--------------------------------Category Functions-------------------------------
    clickCategory = (id) => {
        this.setState({selected: id});
        this.listTodosByCategory(id);
    };

    addCategory = (event) => {
        event.preventDefault();

        if (this.state.addCategory === '') {
            this.setState({addCategoryError: true})
        } else {

            const data = {
                name: this.state.addCategory,
                color: "blue"
            };

            axios.post("http://localhost:9090/category", data)
                .catch(error => {
                    console.log("Error: " + error);
                });

            this.setState({
                addCategory: '',
                addCategoryError: false
            });

            this.refreshPage();
        }
    };

    getCategory = (event) => {
        this.setState({
            addCategory: event.target.value,
        });
    };

    updateCategory = () => {
        if (this.state.updateCategory === '') {
            this.setState({updateCategoryError: true});
        } else {
            const data = {
                name: this.state.updateCategory
            };

            axios.put("http://localhost:9090/category/" + this.state.categoryId, data)
                .catch(error => {
                    console.log(error);
                });

            this.setState({
                categoryId: 0,
                updateCategory: "",
                updateCategoryError: false
            });

            this.closeCategoryDialog();
            this.refreshPage();
        }
    };

    getCategoryOnUpdate = (event) => {
        this.setState({updateCategory: event.target.value});
    };

    getCategoryId = (id) => {
        this.openCategoryDialog();

        axios.get("http://localhost:9090/category/" + id)
            .then(res => {
                this.setState({updateCategory: res.data.name, categoryId: id});
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteCategory = (id) => {
        axios.delete("http://localhost:9090/category/" + id)
            .catch(error => {
                console.log(error);
            });

        this.refreshPage();
    };

    cancelCategory = () => {
        this.setState({
            addCategory: '',
            updateCategoryError: false,
        });
    };

    openCategoryDialog = () => {
        this.setState({categoryOpen: true});
    };

    closeCategoryDialog = () => {
        this.setState({
            categoryOpen: false,
            updateCategoryError: false,
        });
    };
}

export default Service;