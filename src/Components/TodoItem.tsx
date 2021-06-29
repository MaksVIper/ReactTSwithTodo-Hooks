import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItem {
    todo: ITodo;
}

const TodoItem: FC<TodoItem> = ({todo}) => {
    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-image">
                            <img src="https://everyleader.net/wp-content/uploads/2015/09/every-leader-weekly-todo-list.jpg"/>
                                <span className="card-title">{todo.id})</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i
                                    className="material-icons">add</i></a>
                        </div>
                        <div className="card-content">
                            <p>{todo.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;