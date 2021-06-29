import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">TypeScript</a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/users">Users</a></li>
                            <li><a href="/todos">Todos</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <ul className="side-nav" id="mobile-demo">
                <li><a href="/users">Users</a></li>
                <li><a href="/todos">Todos</a></li>
            </ul>
        </div>
    );
};

export default Card;