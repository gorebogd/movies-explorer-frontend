import {MAINAPI_URL} from './constants';

const getResponse = (res) => (res.ok
    ? res.json()
    : res.json()
        .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    tokenCheck(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => getResponse(res));
    }

    signUp(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({name, email, password}),
        }).then((res) => getResponse(res));
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({email, password}),
        }).then((res) => getResponse(res));
    }

    getUserInfo(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => getResponse(res));
    }

    setUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
            }),
        })
            .then((res) => getResponse(res));
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => getResponse(res));
    }

    removeBookmark(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => getResponse(res));
    }

    addBookmark(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                country: data.country || 'unknown',
                director: data.director || 'unknown',
                duration: data.duration || 'No data',
                year: data.year || 'unknown',
                description: data.description || 'No description',
                image: data.image,
                trailer: data.trailerLink || 'No trailer',
                thumbnail: data.image || 'No image',
                movieId: data.id || 'No data',
                nameRU: data.nameRU,
                nameEN: data.nameEN || 'No name',
            }),
        })
            .then((res) => getResponse(res));
    }
}

const mainApi = new MainApi({
    baseUrl: MAINAPI_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export default mainApi;
