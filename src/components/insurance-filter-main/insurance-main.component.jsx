import "./insurance-main.styles.scss";
import insuranceData from "../../insurance-data";
import { useState, useEffect } from "react";
import crossClose from "../assets/cross-close.svg"

const InsuranceFilter = () => {
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

	const insuranceList = filteredInsurance.map(ins => <li onClick={() => showPlans(ins.id)} className="insurance" key={ins.id}>{ins.name}
		{ins.showPlans && <ul className="ins-plans-container">
			{ins.plans.map(plan => <dl onClick={handleInsPlanSelection} className={`${ins.id} ins-plans`} key={plan}>{plan}</dl>)}
		</ul> }
	</li>)
	const selectedInsuranceToDisplay = chosenIns && <div className="selected-filter">{chosenIns[0].name}
		<span> - {chosenInsPlan}</span>
	<img onClick={removeChosenPlan} className="cross-close" src={`${crossClose}`} alt="" />
	</div>

	return (
		<div className="insurance-filter">
			<input onChange={inputChange} className="filter-insurance" type="search" />
			{selectedInsuranceToDisplay}
			<ul className="ins-filter-cont">
				{insuranceList}
			</ul>
		
		</div>
	)
}
export default InsuranceFilter;