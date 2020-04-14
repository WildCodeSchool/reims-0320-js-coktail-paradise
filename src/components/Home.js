import React from "react"
import "./Home.css" 
function Home() {
    return (
        
        <div className ="home">

            <div className="home_image_top">
            <img src="https://cdn.discordapp.com/attachments/696746327899504720/697366769869783040/Logo_v4.png"/>
            </div>

            <div divclassName="home_texte">
             What do you want today?
            </div>


            <div className ="home_up_button">

                <button divclassName="button chose"> CHOSE your Cocktail </button>

                <button divclassName ="button make"> MAKE your Cocktail </button>
            
            </div>

            <div className ="home_down_button">

                <button divclassName ="button random"> Random Cocktail </button>
           
                <button divclassName ="button day"> Cocktail of the Day </button>

            </div>
        </div>
    );
}
export default Home 