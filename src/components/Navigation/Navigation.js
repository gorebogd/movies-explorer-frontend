import React from 'react';
import {Link, NavLink, Route, Switch,} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <Switch>
                <Route exact path="/">
                    <Link
                        to="/signup"
                        className="navigation__link"
                    >
                        Регистрация
                    </Link>
                </Route>

                <Route path={['/movies', '/saved-movies', '/profile']}>
                    <>
                        <NavLink
                            to="/movies"
                            className="navigation__link"
                            activeClassName="navigation__link_is-active"
                        >
                            Фильмы
                        </NavLink>

                        <NavLink
                            to="/saved-movies"
                            className="navigation__link"
                            activeClassName="navigation__link_is-active"
                        >
                            Сохранённые фильмы
                        </NavLink>
                    </>
                </Route>
            </Switch>

        </nav>
    );
}

export default Navigation;
