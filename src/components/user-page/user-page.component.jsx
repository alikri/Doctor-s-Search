import "./user-page.styles.scss";
import whitePlaceholder from "../assets/user-pic-placeholder.png";
import { ContextFavoritedDocs } from "../context/favorited-doctors-context";
import { ContextDoctors } from "../context/doctors-context";
import { useState, useContext, useEffect } from "react";
import DoctorPreview from "../doctor-preview/doctor-preview.component";

const UserPage = () => {
	const { favoriteDoc} = useContext(ContextFavoritedDocs);
	const { doctors } = useContext(ContextDoctors);
	const [edit, setEdit] = useState(false);
	const [displayFavoriteDoctors, setDisplayFavoriteDoctors] = useState(null);
	const [userDataSavedByUser, setUserDataSavedByUser] = useState({
		userFisrtName: "",
		userLastName: "",
		userInsurance: "",
		userInsurancePlan: "",
		userEmail: "",
		userCurrentPassword: "",
		userUpdatePassword: ""
	});

	useEffect(() => {
		if (!doctors) return;
		let favorited = doctors.filter(doc => favoriteDoc.includes(doc.id))
		setDisplayFavoriteDoctors(favorited);
	}, [])

	const handleEditBtn = () => {
		setEdit(prevValue => !prevValue);
	}
	const handleUserInputChange = (e) => {
		setUserDataSavedByUser(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
	}

	const doctorsFavoriteList = displayFavoriteDoctors && displayFavoriteDoctors.map(doc => <DoctorPreview
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
	/>)

	return (
		<div className="user-page-container">
			<div className="top-container">
				<div className="telemed-container">
					<h3>To schedule online consultation click <a href="https://www.teladochealth.com/">here</a></h3>
				</div>
				<div className="user-info-container">
					<div className="user-img">
						<img src={whitePlaceholder} alt="" width="150px" height="150px"/>
					</div>
					<div className="user-info">
						<div>
							<h2 onClick={handleEditBtn}>{edit ? "Edit" : "Save"}</h2>
						</div>
						<div className="change-user-info">
							<input name="userFisrtName" value={userDataSavedByUser.userFisrtName} onChange={handleUserInputChange} readOnly={edit} type="text" placeholder="Fisrt Name"/>
							<input name="userLastName" value={userDataSavedByUser.userLastName} onChange={handleUserInputChange} readOnly={edit} type="text" placeholder="Last Name"/>
							<input name="userInsurance" value={userDataSavedByUser.userInsurance} onChange={handleUserInputChange} readOnly={edit} type="text" placeholder="Insurance" />
							<input name="userInsurancePlan"value={userDataSavedByUser.userInsurancePlan} onChange={handleUserInputChange} readOnly={edit} type="text" placeholder="Insurance Plan" />
							<input name="userChangeEmail" value={userDataSavedByUser.userChangePassword} onChange={handleUserInputChange}readOnly={edit} type="email" placeholder="Change Email" />
							<input name="userCurrentPassword" value={userDataSavedByUser.userCurrentPassword} onChange={handleUserInputChange} readOnly={edit} type="password" placeholder="Current Password" />
							<input name="userUpdatePassword" value={userDataSavedByUser.userUpdatePassword} onChange={handleUserInputChange} readOnly={edit} type="password" placeholder="Update Password" />
						</div>
					</div>
				</div>
			</div>
			<div className="user-doc-list-header">
				<h2>List of  favorite doctors:</h2>
			</div>
			{doctorsFavoriteList}
		</div>
	)
}

export default UserPage;