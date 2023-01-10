import "./doctor-profile.styles.scss";
import {useParams} from "react-router-dom"

const DoctorProfile = () => {
	const params = useParams();
	return (
		<div>Doc Profile Page</div>
	)
}

export default DoctorProfile