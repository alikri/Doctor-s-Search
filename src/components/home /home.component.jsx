import "./home.styles.scss";
import image from "../assets/home-background.png";
import SearchBar from "../search bar/searchBar.component";
import FilterNav from "../filter-nav/filter-nav.component";
import FilterNavNew from "../additional-component/filter-nav-new";
import { useState } from "react";

const Home = () => {
	
	const myStyles = {
		backgroundImage: `url(${image})`,
	}

	return (
		<div className="home-container" style={myStyles} >
			<FilterNav />
			<SearchBar />
		</div>

	)
}

export default Home;