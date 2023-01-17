import "./doctor-profile.styles.scss";
import docIcon from "../assets/preview-doc-icon.svg";
import starProfile from "../assets/Star-doc-review.svg";
import greyStar from "../assets/greyStar.svg";
import loader from "../assets/icons8-iphone-spinner.gif";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DoctorProfile = () => {
	const [form, setForm] = useState(false);
	const [doctors, setDoctors] = useState(null);
	const [docToDisplay, setDocToDisplay] = useState(null);
	const [textarea, setTextarea] = useState("");
	const [ratingFromUser, setRatingFromUser] = useState(null);
	const [userRating, setUserRating] = useState([
		{
			star: 1,
			on: false
		},
		{
			star: 2,
			on: false
		},
		{
			star: 3,
			on: false
		},
		{
			star: 4,
			on: false
		},
		{
			star: 5,
			on: false
		},
		{
			star: 6,
			on: false
		},
	]);
	console.log("doc to display");
	console.log(docToDisplay);
	const handleRatings = (e) => {
		console.log(e);
		if (e.target.tagName !== "IMG") return;
		let current = e.target.id;
		let currentN = current.split("")[current.length - 1];
		setRatingFromUser(currentN);
		let updatedState = userRating.map(item => {
			if (item.star <= currentN) {
				return { ...item, on: true }
			}
			return { ...item, on: false };
		})
		setUserRating(updatedState);
	}

	const { docId } = useParams();
	// console.log(docId);

	useEffect(() => {
		fetch("https://woyllyhb24txpvnuetgcn4lgw40pgmbc.lambda-url.eu-central-1.on.aws/?page=1&pageSize=30")
			.then(response => response.json())
			.then(doc => displayDoc(doc.results));
	}, []);

	const displayDoc = (allDoctors) => {
		let id = docId;
		let filteredDoc = allDoctors.filter(doc => doc.id === id);
		setDocToDisplay(filteredDoc[0]);
	}

	const handleAddReview = (e) => {
		e.preventDefault();
	}

	const handleTextareaChange = (e) => {
		let input = e.target.value;
		setTextarea(input);
	}

	const handleReviewSubmit = () => {
		setForm(false);
	}

	const handleAddReviewDropdown = () => {
		setForm(prevValue => !prevValue);
		let updatedValue = userRating.map(item => ({ ...item, on: false }));
		setUserRating(updatedValue);

	}

	const additionalLocations = docToDisplay && docToDisplay.additionalLocations.map(location =>
		<div key={location} className="doc-profile-address">
			<h3>Additional Location:</h3>
			<p>{location}</p>
			<p className="city">New York, NY 10001 • <span>0.7 mi</span></p>
			<p className="doc-profile-phone"><span>Contact:</span> (400) 453-4533</p>
		</div>
	)

	const languageSpoken = docToDisplay && docToDisplay.languageSpoken.map(language => 
		<ul>
			<li>{language}</li>
		</ul>
		)

	return (
		<> {docToDisplay ? 
			<div className="doc-profile-container">
			<div className="doc-profile-main-info">
				<div className="doc-profile-underline-main-info">
					<div className="doc-profile-img-container">
						<img src={docIcon} alt="" />
					</div>
					<div className="doc-profile-name">
							<h2>{docToDisplay.name}</h2>
						<div className="ratings-doc-profile">
							<img src={starProfile} alt="" />
							<p>{docToDisplay.ratings.rating} <span>({docToDisplay.ratings.number})</span></p>
						</div>
						<p>Dermatologist</p>
					</div>
				</div>
				<div className="doc-profile-underline-adresses">
					<div className="doc-profile-address">
						<h3>Main location:</h3>
						<p>{docToDisplay.mainLocation}</p>
						<p className="city">New York, NY 10001 • <span>0.7 mi</span></p>
						<p className="doc-profile-phone"><span>Contact:</span> (400) 453-4533</p>
					</div>
					{additionalLocations}	
				</div>
				<div className="doc-profile-underline-speciality">
					<div className="doc-profile-speciality">
						<h3>Specialities:</h3>
						<ul>
							<li>{docToDisplay.specialization}</li>
						</ul>
					</div>
					<div className="doc-profile-speciality">
						<h3>Gender:</h3>
						<ul>
							<li>{docToDisplay.gender}</li>
						</ul>
					</div>
					<div className="doc-profile-speciality">
						<h3>Language Spoken:</h3>
						{languageSpoken}
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
							<li>{docToDisplay.hospital}</li>
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
			<div className="profile-reviews-container">
				<div className="all-reviews-container">
					<div className="doc-review-container">
						<div className="review-img-container">
							<img src="https://via.placeholder.com/100" alt="" />
						</div>
						<div className="review-info-container">
							<h3>Ariana Grande</h3>
							<div className="star-container-review">
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<p>Nice doctor. I recommend.</p>
							</div>
						</div>
					</div>
					<div className="doc-review-container">
						<div className="review-img-container">
							<img src="https://via.placeholder.com/100" alt="" />
						</div>
						<div className="review-info-container">
							<h3>Ariana Grande</h3>
							<div className="star-container-review">
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<p>Nice doctor. I recommend.</p>
							</div>
						</div>
					</div>
					<div className="doc-review-container">
						<div className="review-img-container">
							<img src="https://via.placeholder.com/100" alt="" />
						</div>
						<div className="review-info-container">
							<h3>Ariana Grande</h3>
							<div className="star-container-review">
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<p>Nice doctor. I recommend.</p>
							</div>
						</div>
					</div>
					<div className="doc-review-container">
						<div className="review-img-container">
							<img src="https://via.placeholder.com/100" alt="" />
						</div>
						<div className="review-info-container">
							<h3>Ariana Grande</h3>
							<div className="star-container-review">
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<img src={starProfile} alt="" />
								<p>Nice doctor. I recommend.</p>
							</div>
						</div>
					</div>
				</div>
				<div className="add-review">
					<button onClick={handleAddReviewDropdown}>Add a review</button>
					{form && <div className="add-review-form-container">
						<form onClick={handleAddReview}>
							<div className="user-img-container">
								<img src="https://via.placeholder.com/100" alt="" />
							</div>
							<div className="user-info-container">
								<h3>Mark Adams</h3>
								<div className="star-container-review" onClick={handleRatings}>
									<button className="review-star"><img id="star1" src={userRating[0].on ? starProfile : greyStar} alt="" /></button>
									<button className="review-star"><img id="star2" src={userRating[1].on ? starProfile : greyStar} alt="" /></button>
									<button className="review-star"><img id="star3" src={userRating[2].on ? starProfile : greyStar} alt="" /></button>
									<button className="review-star"><img id="star4" src={userRating[3].on ? starProfile : greyStar} alt="" /></button>
									<button className="review-star"><img id="star5" src={userRating[4].on ? starProfile : greyStar} alt="" /></button>
								</div>
								<textarea value={textarea} onChange={handleTextareaChange} className="comments-input" type="textarea" placeholder="add your comment" />
								<div className="submit-btn-container">
									<button onClick={handleReviewSubmit} type="submit">Submit</button>
								</div>
							</div>
						</form>
					</div>}
				</div>
			</div>
		</div>
		: <div className="doc-profile-loader"><img src={loader} alt="" /></div> }
		
	</>
		
	)
}

export default DoctorProfile;

