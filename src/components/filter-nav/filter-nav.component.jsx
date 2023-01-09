import "./filter-nav.styles.scss";
import HospitalFilter from "../hospital-filter-main/hospital-main.component";
import RatingsFilter from "../ratings-filter-main/ratings-main.component"
import LanguageFilter from "../language-filter-main/language-main.component";
import GenderFilter from "../gender-filter-main/gender-main.component";
import InsuranceFilter from "../insurance-filter-main/insurance-main.component";
import DistanceFilter from "../distance-filter-main/distance-main.component";
import { useState } from "react";

const FilterNav = () => {
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
	const [isOpen6, setIsOpen6] = useState(false);
	
	return (
		<div className="filter-container">

			<div className="div-drop" onMouseEnter={() => setIsOpen1(true)} onMouseLeave={() => setIsOpen1(false)}>
				<button className="dropdown-btn" >
					Hospital
				</button>
				{isOpen1 && <HospitalFilter />}
			</div>
			<div className="div-drop" onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)}>
				<button className="dropdown-btn" >
					Ratings
				</button>
				{isOpen2 && <RatingsFilter />}
			</div>
			<div className="div-drop" onMouseEnter={() => setIsOpen3(true)} onMouseLeave={() => setIsOpen3(false)}>
				<button className="dropdown-btn" >
					Language
				</button>
				{isOpen3 && <LanguageFilter />}
			</div>
			<div className="div-drop" onMouseEnter={() => setIsOpen4(true)} onMouseLeave={() => setIsOpen4(false)}>
				<button className="dropdown-btn" >
					Gender
				</button>
				{isOpen4 && <GenderFilter />}
			</div>
			<div className="div-drop" onMouseEnter={() => setIsOpen5(true)} onMouseLeave={() => setIsOpen5(false)}>
				<button className="dropdown-btn" >
					Insurance
				</button>
				{isOpen5 && <InsuranceFilter />}
			</div>
			<div className="div-drop" onMouseEnter={() => setIsOpen6(true)} onMouseLeave={() => setIsOpen6(false)}>
				<button className="dropdown-btn" >
					Distance
				</button>
				{isOpen6 && <DistanceFilter />}
			</div>
		</div>
	)
}

export default FilterNav;