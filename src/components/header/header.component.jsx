import "./header.styles.scss";
import docIcon from "../../assets/icons/doc-icon.svg";
import { Link, useParams } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { ContextUser } from "../../context/user.context";
import { useEffect, useState, useContext } from "react";


const Header = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const { user, authorized } = useContext(ContextUser);

	useEffect(() => {
		Auth.currentSession()
		.then((data) => setCurrentUser(data.accessToken.payload.client_id))
			.catch((err) => console.log(err));
	}, [currentUser, user])

	const handleUserAuth = () => {
		if (!currentUser) return;
		Auth.signOut()
			.then((data) => setCurrentUser(data));
		authorized(currentUser);
	}

	return (
		<div className="header">
			<div className="header-container">
				<div className="header-left">
					<div className="logo-container">
						<img src={docIcon} alt="" />
					</div>
					<Link to="/" style={{ textDecoration: "none", color: "white" }} >
						<h2>DocforYou</h2>
					</Link>
				</div>
				<div className="header-right">
					{currentUser && <Link
						to={`/authorization/${currentUser}`}
						style={{ textDecoration: "none", color: "white" }}
					><button className="my-profile-btn">My Profile</button></Link>}
					{currentUser ?
						<Link
						to="/"
							style={{ textDecoration: "none", color: "white" }}
							onClick={handleUserAuth}
					><span>Sign Out</span>
						</Link> :
						<Link
							to="/authorization"
							style={{ textDecoration: "none", color: "white" }}
							onClick={handleUserAuth}
						> <span>Sign-in / Sign-up</span>
					</Link> }
					
				</div>
			</div>
		</div>
		
		
	)
}

export default Header;