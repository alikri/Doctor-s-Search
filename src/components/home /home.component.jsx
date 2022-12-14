import "./home.styles.scss";
import image from "../assets/home-background.png";
import SearchBar from "../search bar/searchBar.component";
import FilterNav from "../filter-nav/filter-nav.component";
import Doctors from "../doctors/doctors.component";
import DoctorProfile from "../doctor-profile/doctor-profile.component";

import { Routes, Route } from "react-router-dom";

const Home = () => {
	
	const myStyles = {
		backgroundImage: `url(${image})`,
	}
	return (
		<div className="home-container" style={myStyles} >

			<Routes>
				<Route index element={<><FilterNav /><SearchBar/></>} />
				<Route path="/doctors" element={<Doctors />} />
				<Route path="/doctors/:docId" element={<DoctorProfile/>} />
            </Routes>
		</div>

	)
}

export default Home;