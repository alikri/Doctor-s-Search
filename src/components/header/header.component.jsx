import "./header.styles.scss";
import docIcon from "../assets/doc-icon.svg";


const Header = () => {

	return (
		<div className="header">
			<div className="header-container">
				<div className="header-left">
					<div className="logo-container">
						<img src={docIcon} alt="" />
					</div>
					<h2>DocforYou</h2>
				</div>
				<div className="header-right">
					<span>Sign-in / Sign-up</span>
				</div>
			</div>
		</div>
		
		
	)
}

export default Header;