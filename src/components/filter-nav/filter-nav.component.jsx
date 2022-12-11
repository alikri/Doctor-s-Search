import "./filter-nav.styles.scss";
import HospitalFilter from "../hospital main page/hospital-main-page.component";

const FilterNav = () => {
	return (
		<div className="filter-container">
			<div className="dropdown-background">
			<span className="filter-arrow"></span>
			</div>
			<h2>Hospital</h2>
			<HospitalFilter />
			<h2>Ratings</h2>
			<h2>Language Spoken</h2>
			<h2>Gender</h2>
			<h2>Insurance</h2>
			<h2>Distance</h2>
			
		</div>
	)
}

export default FilterNav;