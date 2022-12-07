import "./home.styles.scss";
import image from "../assets/home-background.png";
import SearchBar from "../search bar/searchBar.component";

const Home = () => {

	
	const myStyles = {
		backgroundImage: `url(${image})`,
	}
	return (
		<div className="home-container" style={myStyles}>
			<SearchBar />
		</div>
	)
}

export default Home;