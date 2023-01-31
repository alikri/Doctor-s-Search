import "./home.styles.scss";
import image from "../../assets/icons/home-background.png";
import SearchBar from "../../components/search-bar/searchBar.component";
import FilterNav from "../../components/filter-nav/filter-nav.component";
import Doctors from "../doctors-page/doctors.component";
import DoctorProfile from "../doctor-profile-page/doctor-profile.component";
import Authorization from "../authorization-page/authorization.component";
import UserPage from "../user-page/user-page.component";
// import { Auth } from 'aws-amplify';

import { Routes, Route } from "react-router-dom";

const Home = () => {
	// Auth.currentSession()
	// 	.then((data) => console.log(data))
	// 	.catch((err) => console.log(err));
	

	// console.log("----")
	// const a = async () => {
	// 	const { attributes } = await Auth.currentAuthenticatedUser();
	// 	console.log(attributes);
	// 	console.log(attributes.sub);
	// }

	// a();
	
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
				<Route path="/authorization/:userId" element={<UserPage />} />
            </Routes>
		</div>

	)
}

export default Home;
