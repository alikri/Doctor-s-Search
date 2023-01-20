import "./header.styles.scss";
import docIcon from "../../assets/icons/doc-icon.svg";
import { Link } from "react-router-dom";


const Header = () => {

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
					<Link to="/authorization"style={{ textDecoration: "none", color: "white" }}>
						<span>Sign-in / Sign-up</span>
					</Link>
					
				</div>
			</div>
		</div>
		
		
	)
}

export default Header;