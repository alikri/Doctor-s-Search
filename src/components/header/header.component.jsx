import "./header.styles.scss";
import docIcon from "../../assets/icons/doc-icon.svg";
import { Link } from "react-router-dom";
import { Auth } from 'aws-amplify';
import { ContextUser } from "../../context/user.context";
import { useEffect, useState, useContext } from "react";


const Header = () => {
	const [render, setRender] = useState(0);
	const [userFromContext, setUserFromContext] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const { user } = useContext(ContextUser);
	console.log("render");
	console.log(render);
	useEffect(() => {
		Auth.currentSession()
		.then((data) => setCurrentUser(data.accessToken.payload.client_id))
			.catch((err) => console.log(err));
		if (currentUser) {
			setRender(prevValue => prevValue + 1)
		}
	}, [user])

	const handleUserAuth = () => {
		setRender((prevValue => prevValue + 1))
		if (currentUser) {
			setCurrentUser(false);
			Auth.signOut();
		} 
	}
	console.log("current user")
	console.log(currentUser);
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