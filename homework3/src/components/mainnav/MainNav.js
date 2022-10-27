import React from "react";
import "./mainnav.css";

const MainNav = () => {
	return (
		<nav id="main-nav">
			<ul>
				<li>
					<a href="#profile">Profile</a>
				</li>
				<li>
					<a href="#experiences">Experiences</a>
				</li>
				<li>
					<a href="#abilities">Abilities</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Contacts</a>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
