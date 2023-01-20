import { createContext, useEffect, useState} from "react";
import insuranceData from "../insurance-data";

const ContextInsurance = createContext();

function FilterInsuranceProvider({ children }) {
	const [insurance, setInsurance] = useState(insuranceData);
	const [chosenInsPlan, setChosenInsPlan] = useState(null);
	const [chosenIns, setChosenIns] = useState(null);
	const [filteredInsurance, setFilteredInsurance] = useState(insurance);
	const [insuranceSearchField, setInsuranceSearchField] = useState("");
	useEffect(() => {
		const newFilterIns = insurance.filter(
			(insurance) => {
				return insurance.name.toLocaleLowerCase().includes(insuranceSearchField);
			})
		setFilteredInsurance(newFilterIns);
	}, [insurance, insuranceSearchField]);
	

	function inputChange(e){
		let searchFieldString = e.target.value.toLocaleLowerCase();
		setInsuranceSearchField(searchFieldString);
	}

	
	const showPlans = (id) => {
		const updatedInsurance = insurance.map(ins => {
			if (id === ins.id) {
				return {...ins, showPlans: !ins.showPlans}
			} else 
				return {...ins}
		})
	
		setInsurance(updatedInsurance);
	}

	const handleInsPlanSelection = (e) => {
		if (e.target.tagName !== "DL") return;
		let chosenPlan = e.target.innerHTML;
		const insuranceClassNames = e.target.className;
		const insuranceFirstClassName = insuranceClassNames.split(" ");
		const chosenInsurance = filteredInsurance.filter(insurance => insurance.id === Number(insuranceFirstClassName[0]));
		setChosenIns(chosenInsurance);
		setChosenInsPlan(chosenPlan)
	}
	const removeChosenPlan = (e) => {
		let planToRemove = e.target.offsetParent.innerText;
		let planRemove = planToRemove.split(" - ")[1];
		if (chosenInsPlan === planRemove) {
			setChosenInsPlan(null);
			setChosenIns(null);
		}
	}
	return (
		<ContextInsurance.Provider value={{showPlans, insurance, insuranceSearchField, filteredInsurance, chosenIns, chosenInsPlan, inputChange, handleInsPlanSelection, removeChosenPlan}}>
			{children}
		</ContextInsurance.Provider>
	)

}

export { ContextInsurance, FilterInsuranceProvider };