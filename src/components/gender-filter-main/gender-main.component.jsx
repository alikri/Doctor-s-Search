import "./gender-main.styles.scss";
import crossClose from "../assets/cross-close.svg";
import { useContext } from "react";
import { ContextGender } from "../context/filter-gender-context";

const GenderFilter = () => {

	const {chosenGender, removeChosenGender, handleGenderSelection} = useContext(ContextGender);

		const genderList = chosenGender && chosenGender.map(gender => <div key={gender} className="selected-filter">{gender}
			<img onClick={removeChosenGender} className="cross-close" src={`${crossClose}`} alt="" />
		</div>)

		return (
			<div className="gender-filter">
				{genderList}
				<ul onClick={handleGenderSelection} >
					<li>Male</li>
					<li>Female</li>
					<li>Non Binary</li>
				</ul>
			</div>
		)
	
}
	
export default GenderFilter;