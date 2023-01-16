import "./user-page.styles.scss";
import whitePlaceholder from "../assets/user-pic-placeholder.png"

const UserPage = () => {
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
						<div><h2>Edit / Save</h2></div>
						<div className="change-user-info">
							<input type="text" placeholder="Fisrt Name"/>
							<input type="text" placeholder="Last Name"/>
							<input type="text" placeholder="Insurance"/>
							<input type="text" placeholder="Insurance Plan"/>
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