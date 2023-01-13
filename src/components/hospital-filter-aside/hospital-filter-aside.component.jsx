import "./hospital-filter.aside.styles.scss";

import { useContext } from "react";
import crossClose from "../assets/cross-close.svg"
import { ContextHospital } from "../context/filter-hospital-context";

const HospitalFilterAside = () => {

	const { filteredHospital, 
		chosenHospital, 
		inputChange, 
		handleHospitalSelection, 
		removeChosen} = useContext(ContextHospital);

	const hospitalList = filteredHospital.map(hospital => <li key={hospital.id}>{hospital.name}</li>) 

	const selectedFacility = chosenHospital && chosenHospital.map(facility => <div key={facility} className="selected-filter">{facility}
		<img onClick={removeChosen} className="cross-close" src={`${crossClose}`} alt="" />
	</div>)

	
	return (
		<div className="hospital-search-container-aside">
			<div className="hospital-input-container-aside">
				<input onChange={inputChange} className="filter-hospital-aside" type="search" />
				{selectedFacility}
			</div>
			<ul onClick={handleHospitalSelection}>
				{hospitalList}
			</ul>
		</div>
	)
}
export default HospitalFilterAside