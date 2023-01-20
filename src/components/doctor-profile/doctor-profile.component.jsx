import "./doctor-profile.styles.scss";
import docIcon from "../../assets/preview-doc-icon.svg";
import starProfile from "../../assets/star-doc-review.svg";
import greyStar from "../../assets/grey-star.svg";
import loader from "../../assets/icon-spinner.gif";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DoctorProfile = () => {
	const [form, setForm] = useState(false);
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
	
	const { docId } = useParams();

	useEffect(() => {
		fetch(`https://juzz51gsf7.execute-api.eu-central-1.amazonaws.com/dev/doctors/${docId}`)
			.then(response => response.json())
			.then(doc => setDocToDisplay(doc));
	}, []);

	const handleRatings = (e) => {
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

	const languageSpoken = docToDisplay && docToDisplay.languageSpoken.map((language,index) => 
		<ul key={index}>
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
							<a href="#reviews">
							<div className="ratings-doc-profile">
								<img src={starProfile} alt="" />
								<p>{docToDisplay.ratings.rating} <span>({docToDisplay.ratings.number})</span></p>
							</div>
							</a>
							
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
							<div className="doc-profile-language">
							{languageSpoken}
						</div>
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
						<div id="reviews" className="review-img-container">
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

