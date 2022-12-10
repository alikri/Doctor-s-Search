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
		</div>
	)
}

export default FilterNav;