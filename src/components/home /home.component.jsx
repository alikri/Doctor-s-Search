import "./home.styles.scss";
import image from "../assets/home-background.png";
import SearchBar from "../search bar/searchBar.component";
import FilterNav from "../filter-nav/filter-nav.component";
import { useState } from "react";

const Home = () => {
	const [hover, setHover] = useState({
		hospitalHover: false,
		ratingsHover: false,
		language: false,
		gender: false,
		insurance: false,
		distance: false
	});

	const showHospitalFilter = () => {
		setHover(prevValue => ({...prevValue, hospitalHover: true}));
	}

	const hideHospitalFilter = () => {
		setHover(prevValue => ({ ...prevValue, hospitalHover: false }));
	}
	
	const myStyles = {
		backgroundImage: `url(${image})`,
	}

	return (
		<div className="home-container" style={myStyles}>
			<FilterNav hover={hover} showHospitalFilter={showHospitalFilter} hideHospitalFilter={hideHospitalFilter} />
				<SearchBar />
		</div>
	)
}

export default Home;