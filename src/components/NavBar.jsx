import React from 'react';
import './Navbar.css';

function NavBar() {
	return (
		<div className='DivNavBar'>
			<nav className='NavBar'>
				<div className='NavBarBurger'>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className='NavBarTitle'>
					<h1 className="NavFontStyle">Cocktail Paradise</h1>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;