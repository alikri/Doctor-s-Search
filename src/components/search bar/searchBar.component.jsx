import "./searchBar.styles.scss";
import {ReactComponent as LoopSvg} from "../assets/loopToSearch.svg"

const SearchBar = () => {
	return (
		<div className="search-container">
				<input className="home-page-zip input-search" type="search" placeholder="zip code" />
				<input className="home-page-search input-search" type="search" placeholder="search by speciality, name, condition" />
			<button className="search-btn">
				<LoopSvg />
				<span>Search</span> 
			</button>
		</div>
	)
}

export default SearchBar;