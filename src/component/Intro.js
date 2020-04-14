import React from 'react';
import './Intro.css';

const Intro = () => {
    return (
        <div className = "intro">
            <img className = "logoCocktail" alt = "logo" src ="https://raw.githubusercontent.com/lulup52/exemple/master/Logo_v1.png"/>
            <div className = "slogan">Find the cocktail of your dream</div>
            <div>
                <p className = "nomIntro">Malik Himeur</p>
                <p className = "nomIntro">Angelique Mora</p>
                <p className = "nomIntro">Joel Rodier</p>
                <p className = "nomIntro">Lucas Perrin</p>
            </div>
            <img className = "logoWild" alt = "logoWild" src ="https://raw.githubusercontent.com/lulup52/exemple/master/logo-wild-blanc.png"/>

        </div>
    )
}



export default Intro;
