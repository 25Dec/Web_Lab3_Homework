import React, { useEffect } from "react";
import "./profile.css";

import Img01 from "../../asset/img/cat01.jpg";
import Img02 from "../../asset/img/cat02.jpg";
import Img03 from "../../asset/img/cat03.jpg";
import Img04 from "../../asset/img/cat04.jpg";
import Img05 from "../../asset/img/cat05.jpg";
import Img06 from "../../asset/img/cat06.jpg";
import Img07 from "../../asset/img/cat07.jpg";
import Img08 from "../../asset/img/cat08.png";

const images = [Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08];

const Profile = () => {
	useEffect(() => {
		const profileContentImage = document.querySelector("#profile .profile__content-image img");
		let count = 0;
		setInterval(() => {
			count++;
			if (count <= 7) {
				profileContentImage.setAttribute("src", images[count]);
			} else {
				count = 0;
				profileContentImage.setAttribute("src", images[count]);
			}
		}, 2000);
	}, []);

	return (
		<section id="profile">
			<h1>Profile</h1>
			<h4>I'm a student</h4>
			<div className="profile__content">
				<div className="profile__content-aboutme">
					<h3>About me</h3>
					<p>I am a lovely cat. I have passion in IT and I want to become data analyst</p>
				</div>
				<div className="profile__content-image">
					<img src={Img08} alt="Avatar" />
				</div>
				<div className="profile__content-details">
					<h3>Details</h3>
					<h5>Name:</h5>
					<p>Tran Van Boss</p>
					<h5>Age:</h5>
					<p>5 years</p>
					<h5>Location:</h5>
					<p>UIT, VNU-HCM</p>
				</div>
			</div>
		</section>
	);
};

export default Profile;
