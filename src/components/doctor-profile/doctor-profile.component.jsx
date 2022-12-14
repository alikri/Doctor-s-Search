import "./doctor-profile.styles.scss";
import docIcon from "../assets/preview-doc-icon.svg";
import starProfile from "../assets/Star-doc-review.svg";
import { useParams } from "react-router-dom";

const DoctorProfile = () => {
	const { docId } = useParams();
	return (
		<div className="doc-profile-container">
			<div className="doc-profile-main-info">
				<div className="doc-profile-underline-main-info">
					<div className="doc-profile-img-container">
						<img src={docIcon} alt="" />
					</div>
					<div className="doc-profile-name">
						<h2>Marry Hill. MD</h2>
						<div className="ratings-doc-profile">
							<img src={starProfile} alt="" />
							<p>4,8 <span>(100)</span></p>
						</div>
						<p>Dermatologist</p>
					</div>
				</div>
				<div className="doc-profile-underline-adresses">
					<div className="doc-profile-address">
					<h3>Main location:</h3>
						<p>305 7th Ave, Fl 10</p>
						<p className="city">New York, NY 10001 • <span>0.7 mi</span></p>
						<p className="doc-profile-phone"><span>Contact:</span> (400) 453-4533</p>
					</div>
					<div className="doc-profile-address">
						<h3>Additional location:</h3>
						<p>45 8th Ave</p>
						<p className="city">New York, NY 10001 • <span>0.12 mi</span></p>
						<p className="doc-profile-phone"><span>Contact:</span> (400) 422-4533</p>
					</div>
					<div className="doc-profile-address">
						<h3>Additional location:</h3>
						<p>12 10th Ave</p>
						<p className="city">New York, NY 10091• <span>2 mi</span></p>
						<p className="doc-profile-phone"><span>Contact:</span> (400) 111-4000</p>
					</div>
				</div>
				<div className="doc-profile-underline-speciality">
				<div className="doc-profile-speciality">
					<h3>Specialities:</h3>
						<ul>
							<li>Dermatologist</li>
							<li>Pediatrics</li>
						</ul>
					</div>
					<div className="doc-profile-speciality">
						<h3>Gender:</h3>
						<ul>
							<li>Female</li>
						</ul>
					</div>
					<div className="doc-profile-speciality">
						<h3>Language Spoken:</h3>
						<ul>
							<li>English</li>
							<li>French</li>
						</ul>
					</div>
				</div>
				<div className="doc-profile-underline-speciality">
				<div className="doc-profile-speciality">
					<h3>Education:</h3>
						<ul>
							<li>Harward University</li>
						</ul>
					</div>
					<div className="doc-profile-speciality">
						<h3>Hospital/Practice:</h3>
						<ul>
							<li>Derma Health</li>
						</ul>
					</div>
					<div className="doc-profile-speciality">
						<h3>Ownership:</h3>
						<ul>
							<li>Private</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="profile-main-ratings-container">
					<h3>Reviews</h3>
					<div className="ratings-doc-profile">
							<img src={starProfile} alt="" />
							<p> 4,8 <span>(100)</span></p>
					</div>
			</div>
		</div>
	)
}

export default DoctorProfile;