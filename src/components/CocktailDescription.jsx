import React from 'react';
import "./CocktailDescription.css";

function CocktailDescription() {
	return (
		<div>
			<div className='DivDescription'>
				<div className='ImageDescription'>
					<img src="https://picsum.photos/170/220" alt="" />
				</div>
				<div className='TextDescription'>
					<h1 className='TitleCocktail'>Mojito</h1>
					<p>Ingredients</p>
					<ul>
						<li>Light Rum</li>
						<li>Lime</li>
						<li>Sugar</li>
						<li>Mint</li>
						<li>Soda Water</li>
					</ul>
				</div>
			</div>
			<div>
				<h2>Recipe :</h2>
			</div>
			<div className='DivRecipe'>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, laboriosam repellendus eveniet, atque alias provident omnis adipisci ipsam tempore voluptatibus doloremque eum ducimus dolores non perspiciatis ea odit enim obcaecati.</p>
				<button className="buttonCliked">Similar Cocktails</button>
			</div>
		</div>
	);
}

export default CocktailDescription;