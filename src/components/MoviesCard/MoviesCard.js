import React from 'react';
import BookmarkButton from '../ui/BookmarkButton/BookmarkButton';
import BookmarkRemoveButton from '../ui/BookmarkRemoveButton/BookmarkRemoveButton';
import durationFormatter from '../../utils/durationFormatter';
import './MoviesCard.css';

function MoviesCard({
                        savedMovies, movie, onBookmarkClick, isMovieAdded,
                    }) {
    const {
        nameRU, duration, trailer, image,
    } = movie;

    const isAdded = isMovieAdded(movie);

    const handleBookmarkClick = (e) => {
        e.preventDefault();
        onBookmarkClick(movie, !isAdded);
    };

    const removeHandler = () => {
        onBookmarkClick(movie, false);
    };

    return (
        <div className="movie-card">
            <div className="movie-card__header">
                <div className="movie-card__meta-container">
                    <h4 className="movie-card__title">{nameRU}</h4>
                    <p className="movie-card__duration">{durationFormatter(duration)}</p>
                </div>
                {savedMovies
                    ? <BookmarkRemoveButton onClick={removeHandler}/>
                    : <BookmarkButton isAdded={isAdded} onClick={handleBookmarkClick}/>}
            </div>
            <a className="movie-card__link" href={trailer} target="_blank" rel="noopener noreferrer">
                <img
                    className="movie-card__image"
                    src={image}
                    alt={`Фотография к фильму ${nameRU}`}
                />
            </a>
        </div>
    );
}

export default MoviesCard;
