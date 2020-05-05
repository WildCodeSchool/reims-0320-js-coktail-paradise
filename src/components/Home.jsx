import React from 'react';
import './home.css';

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
        <button className="button"> Choose your Cocktail </button>
        <button className="button"> Make your Cocktail </button>
      </div>
      <footer>
        <a href="https://www.wildcodeschool.com/fr-FR">Wild Code School</a>
        <a href="https://fr.freepik.com/photos-vecteurs-libre/texture">©Texture vecteur créé par macrovector <br></br>- fr.freepik.com</a>
      </footer>
    </div>
  );
}

export default Home;
