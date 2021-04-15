import React, { Component } from 'react';
import './ToDoListItem';
import ToDoForm from './ToDoForm';
import './App.css';
import Title from './Title';
import TodoListItem from './ToDoListItem';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 0, text: 'Здати усний екзамен.' },
                { id: 1, text: 'Здати практичну частину.' },
                { id: 2, text: 'Запушити до 21:00.' }
            ],
            nextId: 3,
            formValue: ''
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todoText) {
        this.setState({
            todos: this.state.todos.concat([
                {
                    id: this.state.nextId,
                    text: todoText
                }
            ]),
            nextId: this.state.nextId + 1
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }

    render() {
        return (
            <div>
                 <Title />
                    <div>
                        <ToDoForm
                            todoText=''
                            addTodo={this.addTodo}
                            todos={this.state.todos}
                        />
                            <ul>
                                {this.state.todos.map(todo => {
                                    return (
                                        <TodoListItem
                                            todo={todo}
                                            key={todo.id}
                                            id={todo.id}
                                            text={todo.text}
                                            removeTodo={this.removeTodo}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
            </div>
        );
    }
}