import "./searchBar.styles.scss";
import { ReactComponent as LoopSvg } from "../../assets/icons/loop-to-search.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
	const [zipcodeMain, setZipcodeMain] = useState("");
	const [docSearchMainPage, setDocSearchMainPage] = useState("");

	const handleBtnClick = () => {
		if (!zipcodeMain) {
			alert("Zip code is required")
		} else if (zipcodeMain.length !== 5 || isNaN(zipcodeMain)) {
			alert("Zip code is not valid")
		}
		// fetch('https://juzz51gsf7.execute-api.eu-central-1.amazonaws.com/dev/doctorshttps://juzz51gsf7.execute-api.eu-central-1.amazonaws.com/dev/doctors', {
		// 	method: 'POST',
		// 	headers: {
		// 	  'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 	  data: { ... }
		// 	})
		//   })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 	  console.log(data);
		// 	})
		// 	.catch(error => {
		// 	  console.error(error);
		// });
	}

	const inputChangeDocMainPage = (e) => {
		let input = e.target.value;
		setDocSearchMainPage(input);
	}

	const handleZipcodeChangeMainPage = (e) => {
		let number = e.target.value;
		setZipcodeMain(number);
	}

	return (
		<div className="search-container">
			<input
				className="home-page-zip input-search"
				value={zipcodeMain}
				type="search"
				placeholder="zip code"
				onChange={handleZipcodeChangeMainPage}
			/>
			<input
				className="home-page-search input-search"
				type="search"
				placeholder="search by speciality, name, condition"
				value={docSearchMainPage}
				onChange={inputChangeDocMainPage}
			/>
			<Link
				to={`${zipcodeMain && zipcodeMain.length === 5?"/doctors":"/" }`}
				style={{ textDecoration: "none" }}
				state={{zipcodeMain, docSearchMainPage}}
			>
				<button className="search-btn"
				onClick={handleBtnClick}
				>
				<LoopSvg />
				<span>Search</span> 
				</button>
			</Link>
			
		</div>
	)
}

export default SearchBar;