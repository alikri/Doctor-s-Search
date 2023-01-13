import "./aside-filters.styles.scss";
import HospitalFilterAside from "../hospital-filter-aside/hospital-filter-aside.component";
import RatingsFilterAside from "../ratings-filter-aside/ratings-filter-aside.component";
import LanguageFilterAside from "../language-filter-aside/language-filter-aside.component";
import GenderFilterAside from "../gender-filter-aside/gender-filter-aside.component";
import InsuranceFilterAside from "../insurance-filter-aside/insurance-filter-aside.component";
import DistanceFilterAside from "../distance-filter-aside/distance-filter-aside.component";

const AsideFilters = () => {

	return (
		<div className="aside-filters-container">
			<div className="aside hospital-aside-container">
				<h2>Choose facility:</h2>
					<HospitalFilterAside />
			</div>
			<div className="aside ratings-aside-container">
				<h2>Choose ratings:</h2>
					<RatingsFilterAside />
			</div>
			<div className="aside language-aside-container">
				<h2>Choose language:</h2>
					<LanguageFilterAside />
			</div>
			<div className="aside gender-aside-container">
				<h2>Choose gender:</h2>
					<GenderFilterAside />
			</div>
			<div className="aside insurance-aside-container">
				<h2>Choose insurance & plan:</h2>
					<InsuranceFilterAside />
			</div>
			<div className="aside distance-aside-container">
				<h2>Choose max distance</h2>
					<DistanceFilterAside />
			</div>
		</div>
	)
}

export default AsideFilters;