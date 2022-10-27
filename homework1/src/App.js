import logo from "./asset/img/drum.png";
import ListItem from "./ListItem";

import wDrum from "../src/asset/img/wDrum.png";
import aDrum from "../src/asset/img/aDrum.png";
import sDrum from "../src/asset/img/sDrum.png";
import dDrum from "../src/asset/img/dDrum.png";
import jDrum from "../src/asset/img/jDrum.png";
import kDrum from "../src/asset/img/kDrum.png";
import lDrum from "../src/asset/img/lDrum.png";

import tom_1 from "../src/asset/sounds/sounds_tom-1.mp3";
import tom_2 from "../src/asset/sounds/sounds_tom-2.mp3";
import tom_3 from "../src/asset/sounds/sounds_tom-3.mp3";
import tom_4 from "../src/asset/sounds/sounds_tom-4.mp3";
import snare from "../src/asset/sounds/sounds_snare.mp3";
import crash from "../src/asset/sounds/sounds_crash.mp3";
import kick_bass from "../src/asset/sounds/sounds_kick-bass.mp3";

const images = [wDrum, aDrum, sDrum, dDrum, jDrum, kDrum, lDrum];

const sounds = [tom_1, tom_2, tom_3, tom_4, snare, crash, kick_bass];

document.addEventListener("keypress", (e) => {
	let key = e.keyCode;
	switch (key) {
		case 119:
			let wSound = new Audio(tom_1);
			wSound.play();
			break;
		case 97:
			let aSound = new Audio(tom_2);
			aSound.play();
			break;
		case 115:
			let sSound = new Audio(tom_3);
			sSound.play();
			break;
		case 100:
			let dSound = new Audio(tom_4);
			dSound.play();
			break;
		case 106:
			let jSound = new Audio(snare);
			jSound.play();
			break;
		case 107:
			let kSound = new Audio(crash);
			kSound.play();
			break;
		case 108:
			let lSound = new Audio(kick_bass);
			lSound.play();
			break;
	}
});

function App() {
	return (
		<div className="App">
			<h1>
				Drum
				<img src={logo} alt="logo" />
				Kit
			</h1>
			<ListItem images={images} sounds={sounds} />
		</div>
	);
}

export default App;
