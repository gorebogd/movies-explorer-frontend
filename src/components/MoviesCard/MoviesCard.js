import React, {useState} from 'react';
import BookmarkButton from '../ui/BookmarkButton/BookmarkButton';
import BookmarkRemoveButton from '../ui/BookmarkRemoveButton/BookmarkRemoveButton';
import './MoviesCard.css';

function MoviesCard({cardData, isRenderInSaved}) {
    const [isAdded, setIsAdded] = useState(false);
    const tempHandleClick = () => setIsAdded(!isAdded);

    return (
        <div className="movie-card">
            <div className="movie-card__header">
                <div className="movie-card__meta-container">
                    <h4 className="movie-card__title">{cardData.title}</h4>
                    <p className="movie-card__duration">{cardData.duration}</p>
                </div>
                {isRenderInSaved
                    ? <BookmarkRemoveButton/>
                    : <BookmarkButton isAdded={isAdded} onClick={tempHandleClick}/>}
            </div>
            <img
                className="movie-card__image"
                src={cardData.img}
                alt={`Фотография к фильму ${cardData.title}`}
            />
        </div>
    );
}

export default MoviesCard;
