import {Route, Switch} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="page-container">

                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Main/>
                        <Footer/>
                    </Route>

                    <Route path="/movies">
                        <Header/>
                        <Movies/>
                        <Footer/>
                    </Route>

                    <Route path="/saved-movies">
                        <Header/>
                        <SavedMovies/>
                        <Footer/>
                    </Route>

                    <Route path="/profile">
                        <Header/>
                        <Profile/>
                    </Route>

                    <Route path="/signup">
                        <Register/>
                    </Route>

                    <Route path="/signin">
                        <Login/>
                    </Route>

                    <Route component={NotFound}/>
                </Switch>

            </div>

        </div>
    );
}

export default App;
