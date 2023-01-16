import "./doctor-preview.styles.scss";
import star from "../assets/Star-doc-review.svg";
import docsIcon from "../assets/preview-doc-icon.svg";
import network from "../assets/network.svg";
import emptyHeart from "../assets/empty-heart.svg";
import redHeart from "../assets/red-heart.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const DoctorPreview = (props) => {

	const [favorite, setFavorite] = useState(false);
	const { name, gender, specialization, hospital, zipcode, languageSpoken, ratings, networkStatus, mainLocation, id, handleListOfFavorited} = props;

	const handleFavorite = (e) => {
		setFavorite(prevValue => !prevValue);
	}

	const languageSpokenList = languageSpoken.map(lang => <li key={lang}>{lang}</li>);

	return (
		<div className="doc-preview-container" id={id}>
			<div className="favorite-btn"><img onClick={(e) => [handleFavorite(e), handleListOfFavorited(e)]} src={favorite ? redHeart : emptyHeart} alt="" /></div>
			<div className="doc-img-container-docp">
				<img src={docsIcon} alt="" />
				<div className="network-container-docp"> 
					{ networkStatus === "In-Network" && <div><img src={network} alt="" /></div>}
					<div className="network-docp">{networkStatus}</div>
				</div>
			</div>
			<div className="doc-info-container-docp">
				<div className="top-border-container"> 
					<Link to={`/doctors/${id}`} style={{textDecoration: "none"}}><h2>{name}</h2></Link>
					<p>{specialization}</p>
					<div className="ratings-doc-preview">
						<img src={star} alt="" />
						<p>{ratings.rating} <span>({ratings.number})</span></p>
					</div>
				</div>
				<div className="gender-container-docp">
					<div className="gender-bold">Gender:
						<p>{gender}</p>
					</div>
					<div className="language-container-docp">
						<span>Language Spoken:</span>
						<ul>
							{languageSpokenList}
						</ul>
					</div>
				</div>
			</div>
			<div className="doc-contact-container-docp">
				<div className="location-container-docp">
					<h3>Main location:</h3>
					<p>{mainLocation}</p>
					<p>{zipcode} • <span>0.7 miles</span></p>
					<p className="phone-docp"><span>Contact:</span> (400) 453-4533</p>
				</div>
				<div className="facility-container-docp">
					<h3>Facility:</h3>
					<ul>
						<li>{hospital}</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default DoctorPreview;