import React from "react";
import Item from "./Item";

const ListItem = ({ images, sounds }) => {
	return (
		<div className="actions">
			{images.map((image, index) => {
				return <Item image={image} sound={sounds[index]} key={index} />;
			})}
		</div>
	);
};

export default ListItem;
