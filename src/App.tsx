import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import UsersPage from "./Components/UserPage";
import TodosPage from "./Components/TodosPage";
import UserItemPage from "./Components/UserItemPage";
import TodoItemPage from "./Components/TodoItemPage";
import Card from "./Components/Card";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Card/>
                <Route path={'/users'} exact>
                    <UsersPage/>
                </Route>
                <Route path={'/todos'} exact>
                    <TodosPage/>
                </Route>
                <Route path={'/users/:id'}>
                    <UserItemPage/>
                </Route>
                <Route path={'/todos/:id'}>
                    <TodoItemPage/>
                </Route>
            </div>
        </BrowserRouter>

    );
};

export default App;
