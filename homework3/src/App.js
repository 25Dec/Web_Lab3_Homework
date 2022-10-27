import MainNav from "./components/mainnav/MainNav";
import Profile from "./view/profile/Profile";
import Experiences from "./view/experiences/Experiences";
import Abilities from "./view/abilities/Abilities";

function App() {
	return (
		<div className="App">
			<MainNav />
			<Profile />
			<Experiences />
			<Abilities />
		</div>
	);
}

export default App;
