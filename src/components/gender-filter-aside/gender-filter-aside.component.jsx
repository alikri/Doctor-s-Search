import "./gender-filter-aside.styles.scss";
import crossClose from "../../assets/cross-close.svg";
import { useContext } from "react";
import { ContextGender } from "../context/filter-gender-context";

const GenderFilterAside = () => {
	const {chosenGender, removeChosenGender, handleGenderSelection} = useContext(ContextGender);

		const genderList = chosenGender && chosenGender.map(gender => <div key={gender} className="selected-filter">{gender}
			<img onClick={removeChosenGender} className="cross-close" src={`${crossClose}`} alt="" />
		</div>)

		return (
			<div className="gender-filter-aside">
				{genderList}
				<ul onClick={handleGenderSelection} >
					<li>Male</li>
					<li>Female</li>
					<li>Non Binary</li>
				</ul>
			</div>
		)
}

export default GenderFilterAside;