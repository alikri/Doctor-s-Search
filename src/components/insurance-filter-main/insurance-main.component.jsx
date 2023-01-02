import "./insurance-main.styles.scss";
import { ContextInsurance } from "../context/filter-insurance-context";
import crossClose from "../assets/cross-close.svg"
import { useContext } from "react";

const InsuranceFilter = () => {

	const { showPlans,
		filteredInsurance,
		chosenIns,
		chosenInsPlan,
		inputChange,
		handleInsPlanSelection,
		removeChosenPlan } = useContext(ContextInsurance)


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