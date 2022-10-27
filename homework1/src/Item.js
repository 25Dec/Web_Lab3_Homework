import React from "react";

const handleClick = (sound, e) => {
	let audio = new Audio(sound);
	audio.play();
};

const Item = ({ image, sound }) => {
	return (
		<img
			className="musical-instrument"
			src={image}
			alt="img"
			onClick={(e) => {
				handleClick(sound);
			}}
		/>
	);
};

export default Item;
