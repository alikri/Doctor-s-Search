import "./filter-nav.styles.scss";
import HospitalFilter from "../hospital main page/hospital-main-page.component";
import { useState } from "react";

const FilterNav = (props) => {
	
	return (
		<div className="filter-container">
			<div className="dropdown-background">
			<span className="filter-arrow"></span>
			</div>
			<h2 onMouseEnter={props.showHospitalFilter}>Hospital</h2>
			{props.hover.hospitalHover && <HospitalFilter hideHospitalFilter={props.hideHospitalFilter} />}
			<h2 onMouseEnter={props.hideHospitalFilter}>Ratings</h2>
			<h2>Language Spoken</h2>
			<h2>Gender</h2>
			<h2>Insurance</h2>
			<h2>Distance</h2>
			
		</div>
	)
}

export default FilterNav;