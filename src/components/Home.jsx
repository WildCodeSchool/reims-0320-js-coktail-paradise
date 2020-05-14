import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Barman from '../Barman.jpg';
import Logo from '../Logo_Project_2.png';

function Home() {
  return (
    <div className="home">
      <img src={Logo} alt="logo-cocktail-paradise" className="logo" />
      <div className="home_image_top">
        <img src={Barman} alt="barman's picture" />
      </div>
      <div className="menu">
        <div className="home_texte">
          What do you want today?
        </div>
        <div className="buttonsDiv">
          <div className="buttonArea">
            <Link className="button" to="/cocktails">
              Choose your Cocktail
            </Link>
          </div>
          <div className="buttonArea">
            <Link className="button" to="/cocktails/create">
              Make your Cocktail
            </Link>
          </div>
          <div className="buttonArea">
            <Link className="button" to="/cocktails/random">
              Random Cocktail
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a>
        <a href="https://fr.freepik.com/photos-vecteurs-libre/texture">©Texture vecteur créé par macrovector <br></br>- fr.freepik.com</a>
      </footer>
    </div>
  );
}

export default Home;
