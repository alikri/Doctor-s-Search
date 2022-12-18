import { createContext, useEffect, useState} from "react";
import facilities from "../../hospitals";

const Context = createContext();

function FilterHospitalProvider({ children }) {

	const [hospitals, setHospitals] = useState([]);
	const [hospitalSearchField, setHospitalSearchFiel] = useState("");
	const [filteredHospital, setFilteredHospital] = useState(hospitals);
	const [chosenHospital, setChosenHospital] = useState(null);

	useEffect(() => {
		let generatedHospitals = facilities;
		setHospitals(generatedHospitals);
	}, []);

	useEffect(() => {
		const newFilterHospitals = hospitals.filter(
			(hospital) => {
				return hospital.name.toLocaleLowerCase().includes(hospitalSearchField);
			})
		setFilteredHospital(newFilterHospitals);
	}, [hospitals, hospitalSearchField]);
	

	function inputChange(e){
		let searchFieldString = e.target.value.toLocaleLowerCase();
		setHospitalSearchFiel(searchFieldString);
	}

	function handleSelection(e) {
		if (e.target.tagName !== "LI") return;
		let hospital = e.target.innerHTML;
		if (chosenHospital == null) {
			setChosenHospital([hospital]);
		} else if (!chosenHospital.includes(hospital)) {
			setChosenHospital(prevValue => [...prevValue, hospital])
		}
	}

	function removeChosen(e) {
		let hospitalToRemove = e.target.offsetParent.innerText;
		if (chosenHospital.includes(hospitalToRemove)) {
			let clearedHospitalList = chosenHospital.filter(facility => facility !== hospitalToRemove)
			setChosenHospital(clearedHospitalList);
		}

	}
	
	return (
		<Context.Provider value={{hospitals, hospitalSearchField, filteredHospital, chosenHospital, inputChange, handleSelection, removeChosen}}>
			{children}
		</Context.Provider>
	)

}

export { Context, FilterHospitalProvider };