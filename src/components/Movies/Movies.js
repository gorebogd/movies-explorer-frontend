import React, {useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';
import {tempCards} from '../../data/tempCards';

function Movies() {
    const [isLoading, setIsLoading] = useState(true);
    const showLoadingSample = () => {
        setIsLoading(false);
    };
    setTimeout(showLoadingSample, 1000);

    return (
        <div className="movies">
            <SearchForm/>
            {isLoading
                ? <Preloader/>
                : <MoviesCardList moviesData={tempCards} isRenderInSaved={false} enableLoadMoreBtn/>}
        </div>
    );
}

export default Movies;
