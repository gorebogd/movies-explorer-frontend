import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/tem-bio-photo.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="aboutMe-anchor">
            <h1 className="about-me__title">Студент</h1>
            <div className="about-me__bio-wrapper">
                <div className="about-me__bio-information">
                    <div className="about-me__bio-information-container">
                        <h2 className="about-me__bio-title">Виталий</h2>
                        <p className="about-me__bio-subtitle">Фронтенд-разработчик, 30 лет</p>
                        <p className="about-me__bio-text">
                            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                            С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
                            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                        </p>
                    </div>
                    <div className="about-me__links-container">
                        <a
                            href="https://www.facebook.com/gorshunovbogdan"
                            className="about-me__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://github.com/gorebogd"
                            className="about-me__link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
                <img src={myPhoto} alt="me" className="about-me__photo"/>
            </div>
            <Portfolio/>
        </section>
    );
}

export default AboutMe;
