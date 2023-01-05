import "./doctor-preview.styles.scss";
import star from "../assets/Star-doc-review.svg";
import docsIcon from "../assets/preview-doc-icon.svg";
import network from "../assets/network.svg";
const DoctorPreview = (props) => {
	return (
		<div className="doc-preview-container">
			<div className="doc-img-container-docp">
				<img src={docsIcon} alt="" />
				<div className="network-container-docp"> 
					<div><img src={network} alt="" /></div>
					<div>Network</div>
				</div>
			</div>
			<div className="doc-info-container-docp">
				<div className="top-border-container"> 
				<h2>Marry Hill, MD</h2>
				<p>Dermatologist</p>
				<div className="ratings-doc-preview">
					<img src={star} alt="" />
					<p>4,65 <span>(345)</span></p>
				</div>
				</div>
				
				<div className="gender-container-docp">
					<div className="gender-bold">Gender:
						<p>Female</p>
					</div>
					<div className="language-container-docp">
						<span>Language Spoken:</span>
						<ul>
							<li>English</li>
							<li>Spanish</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="doc-contact-container-docp">
				<div className="location-container-docp">
					<h3>Main location:</h3>
					<p>305 7th Ave, Fl 10 New York, NY 10001 • <span>0.7 miles</span></p>
					<p className="phone-docp"><span>Contact:</span> (400) 453-4533</p>
				</div>
				<div className="facility-container-docp">
					<h3>Facility:</h3>
					<ul>
						<li>DermaCare</li>
						<li>St. Hopkins Hospital</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default DoctorPreview;