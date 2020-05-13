import React from 'react';
import './home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home_image_top">
        <img src="https://media.discordapp.net/attachments/696746327899504720/707224272216784956/Barman.jpg?width=1178&height=923" alt="barman's picture" />
      </div>
      <div className="home_texte">
        What do you want today?
      </div>
      <div className="buttonsDiv">
        <Link className="button" to="/cocktails">
          Choose your Cocktail
        </Link>
        <Link className="button" to="/cocktails/create">
          Make your Cocktail
        </Link>
        <Link className="button" to="/cocktails/random">
          Random Cocktail
        </Link>
      </div>
      <footer>
        <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a>
        <a href="https://fr.freepik.com/photos-vecteurs-libre/texture">©Texture vecteur créé par macrovector <br></br>- fr.freepik.com</a>
      </footer>
    </div>
  );
}

export default Home;
