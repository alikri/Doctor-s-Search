import "./user-page.styles.scss";
import whitePlaceholder from "../assets/user-pic-placeholder.png";
import { ContextFavoritedDocs } from "../context/favorited-doctors-context";
import { useState, useContext } from "react";
import DoctorPreview from "../doctor-preview/doctor-preview.component";

const UserPage = () => {
	const { favoriteDoc, addFavoriteDocs } = useContext(ContextFavoritedDocs);
	console.log("favoriteDoc user profile");
	console.log(favoriteDoc);
	const [edit, setEdit] = useState(false);
	const [userDataSavedByUser, setUserDataSavedByUser] = useState({
		userFisrtName: "",
		userLastName: "",
		userInsurance: "",
		userInsurancePlan: "",
		userEmail: "",
		userCurrentPassword: "",
		userUpdatePassword: ""
	})
	console.log(userDataSavedByUser);

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
		</div>
	)
}

export default UserPage;