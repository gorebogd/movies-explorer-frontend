import {MOVIEAPI_URL} from './constants';

const getResponse = (res) => (res.ok
    ? res.json()
    : res.json()
        .then((err) => Promise.reject(new Error(`${err.message} (${res.status} ${res.statusText})`))));

export const getMovies = () => fetch(`${MOVIEAPI_URL}`, {
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((res) => getResponse(res));

export default getMovies;
