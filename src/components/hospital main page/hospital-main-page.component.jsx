import "./hospital-main-page.styles.scss";
import generateData from "../../hospitals-data";
import { useState, useEffect} from "react";

const HospitalFilter = () => {

	const [hospitals, setHospitals] = useState([]);

	useEffect(() => {
		let generatedHospitals = generateData("Hospital",20);
		setHospitals(generatedHospitals);
	}, [])
	
	
	const hospitalList = hospitals.map(hospital => <li key={hospital.id}>{hospital.name}</li>) 

	return (
		<div className="hospital-search-container">
			<div className="hospital-input-container">
				<input className="filter-hospital" type="search" />
				<input className="filter-hospital-btn" type="submit" />
				<span className="selected hospital">Chosen Hospital</span>
			</div>
			<ul>
				{hospitalList}
			</ul>
		</div>
	)
}

export default HospitalFilter;