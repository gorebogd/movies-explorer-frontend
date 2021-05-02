import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMoreButton from '../ui/LoadMoreButton/LoadMoreButton';
import './MoviesCardList.css';

function MoviesCardList({moviesData, isRenderInSaved, enableLoadMoreButton}) {
    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__list">
                {moviesData.map((movieData) => (
                    <li className="movies-card-list__item" key={movieData.id}>
                        <MoviesCard
                            key={movieData.id}
                            cardData={movieData}
                            isRenderInSaved={isRenderInSaved}
                        />
                    </li>
                ))}
            </ul>
            {enableLoadMoreButton ? <LoadMoreButton/> : null}
        </section>
    );
}

export default MoviesCardList;
