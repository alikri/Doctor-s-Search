import "./home.styles.scss";
import image from "../../assets/icons/home-background.png";
import SearchBar from "../search bar/searchBar.component";
import FilterNav from "../filter-nav/filter-nav.component";
import Doctors from "../doctors/doctors.component";
import DoctorProfile from "../doctor-profile/doctor-profile.component";
import Authorization from "../authorization page/authorization.component";
import UserPage from "../user-page/user-page.component";

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
				<Route path="/doctors/:docId" element={<DoctorProfile />} />
				<Route path="/authorization" element={<Authorization />} />
				<Route path="/authorization/user" element={<UserPage />} />
            </Routes>
		</div>

	)
}

export default Home;