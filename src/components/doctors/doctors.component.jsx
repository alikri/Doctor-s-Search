import "./doctors.styles.scss";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import DoctorPreview from "../doctor-preview/doctor-preview.component";
import loop from "../assets/loopToSearch.svg";
import AsideFilters from "../aside-filters/aside-filters.component";
import loader from "../assets/icons8-iphone-spinner.gif";

const Doctors = () => {

	const location = useLocation();
	const { zipcodeMain, docSearchMainPage } = location.state;
	const [doctors, setDoctors] = useState(null);
	const [docSearchField, setDocSearchFiel] = useState(docSearchMainPage);
	const [filteredDocs, setFilteredDocs] = useState(doctors);
	const [zipcode, setZipcode] = useState(zipcodeMain);
	const [asideFilters, setAsideFilters] = useState(false);


	useEffect(() => {
		fetch("https://woyllyhb24txpvnuetgcn4lgw40pgmbc.lambda-url.eu-central-1.on.aws/?page=1&pageSize=30")
			.then(response => response.json())
			.then(data => setDoctors(data.results))
			.catch(err => alert("Server issue.", err));
	}, []);

	useEffect(() => {
		const filteredSearch = doctors && doctors.filter(
			({ name, specialization}) =>
			  	name.toLowerCase().includes(docSearchField.toLowerCase()) ||
				specialization.toLowerCase().includes(docSearchField.toLowerCase())
		);
		const sortedFilteredSearch = filteredSearch && filteredSearch.sort((a,b) => a.zipcode - b.zipcode)
		setFilteredDocs(sortedFilteredSearch);
	}, [doctors, docSearchField]);


	const handleZipcodeChange = (e) => {
		let number = e.target.value;
		setZipcode(number);
	}

	const inputChangeDocListPage = (e) => {
		let input = e.target.value;
		setDocSearchFiel(input);
	}

	
	const handleSideFiltersOpenning = () => {
		setAsideFilters(prevValue => !prevValue);
	}



	const doctorList = filteredDocs && filteredDocs.map(doc => <DoctorPreview
		key={doc.id}
		id={doc.id}
		name={doc.name}
		ratings={doc.ratings}
		specialization={doc.specialization}
		zipcode={doc.zipcode}
		hospital={doc.hospital}
		insuranceAccepted={doc.insuranceAccepted}
		gender={doc.gender}
		languageSpoken={doc.languageSpoken}
		mainLocation={doc.mainLocation}
		additionalLocations={doc.additionalLocations}
		networkStatus={doc.networkStatus}
	/>)

	return (
		<div className="doc-list-page-container">
			{asideFilters && <div className="doc-list-aside-left" >
				{<AsideFilters />}
			</div>}
			<div className="doc-list-aside-right">
				<div className="doc-list-filter-container">
					<button
						onClick={handleSideFiltersOpenning}
						style={{width: asideFilters && "350px"}}
					>Filter Options</button>
				</div>
				{
					doctors ?
					<div>
						<div className="search-doc-list">
							<input
								onChange={handleZipcodeChange}
								value={zipcode}
								className="doc-list-zip"
								type="search"
								placeholder="zip code" />
							<input
								className="doc-list-search"
								type="search"
								placeholder="search by speciality, name"
								value={docSearchField}
								onChange={inputChangeDocListPage}
							/>
							<button
								className="search-btn"
							>
								<img src={loop} alt="" />
								<span>Search</span>
							</button>
						</div>
						<div className="doc-list-page-msg">
							<h2> {filteredDocs && filteredDocs.length} options within 20 miles of {zipcode}</h2>
						</div>
					</div> : <img className="loader-doc-list" src={loader} alt="Loading.." />
				}
				<div className="doc-big-container">
					{doctorList}
				</div>
			</div>
		</div>
	)
}

export default Doctors;