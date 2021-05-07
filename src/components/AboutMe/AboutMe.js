import React from 'react';
import './AboutMe.css';
import myPhoto from '../../images/bio-photo.jvHAYjxqbbDcZxPEv6xGMysjaPg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="aboutMe-anchor">
            <h1 className="about-me__title">Студент</h1>
            <div className="about-me__bio-wrapper">
                <div className="about-me__bio-information">
                    <div className="about-me__bio-information-container">
                        <h2 className="about-me__bio-title">Богдан</h2>
                        <p className="about-me__bio-subtitle">Фронтенд-разработчик, 27 лет</p>
                        <p className="about-me__bio-text">
                            Я родился в Заречном, а живу и работаю в Москве. Закончил исторический факультет ПГУ. У меня есть красивая подруга Ксюша
                            и пёс Немо. Я люблю второй альбом The Haxan Cloak, японские десерты, поке и приседать на уши.
                            Работаю в диджитал-маркетинге 2 года. Обязательно стану самым профессиональным разработчиком в мире.
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
