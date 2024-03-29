import "./doctors.styles.scss";
import { useState, useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';
import DoctorPreview from "../../components/doctor-preview/doctor-preview.component";
import { ContextFavoritedDocs } from "../../context/favorited-doctors-context";
import { ContextDoctors } from "../../context/doctors-context";
import loop from "../../assets/icons/loop-to-search.svg";
import AsideFilters from "../../components/aside-filters/aside-filters.component";
import loader from "../../assets/icons/icon-spinner.gif";
import croseClose from "../../assets/icons/cross-close.svg";
// import Amplify from 'aws-amplify';
// import config from '../../amplify-config';
// Amplify.configure(config);
import { Auth } from 'aws-amplify';

const Doctors = () => {

	const { doctors } = useContext(ContextDoctors);

	const {favoriteDoc} = useContext(ContextFavoritedDocs);
	const location = useLocation();
	const { zipcodeMain, docSearchMainPage } = location.state;
	const [docSearchField, setDocSearchFiel] = useState(docSearchMainPage);
	const [filteredDocs, setFilteredDocs] = useState(doctors);
	const [zipcode, setZipcode] = useState(zipcodeMain);
	const [asideFilters, setAsideFilters] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const [token, setToken] = useState(null);
	// const [response, setResponse] = useState(null);

	console.log("token");
	console.log(token);
	// console.log(response);

	const isSmall = width < 1462;
	const isSmaller = width < 768;
	useEffect(() => {
		(async () => {
		const user = await Auth.currentAuthenticatedUser();
		const token = user.signInUserSession.accessToken.jwtToken;
		setToken(token);
		})();
	}, []);

	useEffect(() => {
		(async () => {
				fetch('https://oub1xpnh12.execute-api.eu-central-1.amazonaws.com/Prod/example/1', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `${token}`
					}
			// body: JSON.stringify(
			// 	{
			// 		id: '1',
			// 		name: 'This is item 1'
			// 	}
			// )
		})
			.then(res => res.json())
			.then(data => {
			console.log(data);
			})
			.catch(error => {
			console.error(error);
		});
		})();
	}, []);
	
	useEffect(() => {
		function handleResize() {
			setWidth(window.innerWidth);
		}
		
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
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
	
	const handleCloseFiltersBtn = (e) => {
		let target = e.target.className;
		if (target === "doc-list-aside-left" || target === "filters-crose-close") {
			setAsideFilters(false);
		}
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
		favoriteDoc={favoriteDoc.includes(doc.id)}
		isSmaller={isSmaller}
	/>)

	let removePadding = isSmall && asideFilters;

	return (
		<div className="doc-list-page-container" style={{"paddingTop": removePadding && "0px"}}>
			{asideFilters && <div className="doc-list-aside-left" onClick={handleCloseFiltersBtn}>
				<div onClick={handleCloseFiltersBtn} className="filters-crose-close">
					<img className="filters-crose-close" src={croseClose} alt="" />
				</div>
				{<AsideFilters />}
			</div>}
			<div className="doc-list-aside-right">
				<div className="doc-list-filter-container">
					<button
						onClick={handleSideFiltersOpenning}
						style={{width: asideFilters && "110px"}}
					>{!asideFilters && "Filter Options"}</button>
				</div>
				{
					doctors ?
					<div className="doctors-top-header">
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