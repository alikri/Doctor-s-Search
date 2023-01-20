import "./hospital-main.styles.scss"
import { useContext } from "react";
import crossClose from "../../assets/icons/cross-close.svg";
import { ContextHospital } from "../../context/filter-hospital-context";

const HospitalFilter = (props) => {

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
		<div onMouseEnter={props.showHospitalFilter} onMouseLeave={props.hideHospitalFilter} className="hospital-search-container">
			<div className="hospital-input-container">
				<input onChange={inputChange} className="filter-hospital" type="search" />
				{selectedFacility}
			</div>
			<ul onClick={handleHospitalSelection}>
				{hospitalList}
			</ul>
		</div>
	)
}

export default HospitalFilter;









	// const [hospitals, setHospitals] = useState([]);
	// const [hospitalSearchField, setHospitalSearchFiel] = useState("");
	// const [filteredHospital, setFilteredHospital] = useState(hospitals);
	// const [chosenHospital, setChosenHospital] = useState(null);

	// useEffect(() => {
	// 	let generatedHospitals = facilities;
	// 	setHospitals(generatedHospitals);
	// }, []);

	// useEffect(() => {
	// 	const newFilterHospitals = hospitals.filter(
	// 		(hospital) => {
	// 			return hospital.name.toLocaleLowerCase().includes(hospitalSearchField);
	// 		})
	// 	setFilteredHospital(newFilterHospitals);
	// }, [hospitals, hospitalSearchField]);
	

	// const inputChange = (e) => {
	// 	let searchFieldString = e.target.value.toLocaleLowerCase();
	// 	setHospitalSearchFiel(searchFieldString);
	// }

	// const handleSelection = (e) => {
	// 	if (e.target.tagName !== "LI") return;
	// 	let hospital = e.target.innerHTML;
	// 	if (chosenHospital == null) {
	// 		setChosenHospital([hospital]);
	// 	} else if (!chosenHospital.includes(hospital)) {
	// 		setChosenHospital(prevValue => [...prevValue, hospital])
	// 	}
	// }

	// const removeChosen = (e) => {
	// 	let hospitalToRemove = e.target.offsetParent.innerText;
	// 	if (chosenHospital.includes(hospitalToRemove)) {
	// 		let clearedHospitalList = chosenHospital.filter(facility => facility !== hospitalToRemove)
	// 		setChosenHospital(clearedHospitalList);
	// 	}

	// }