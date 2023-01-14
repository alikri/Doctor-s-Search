import "./authorization.styles.scss";

const Authorization = () => {

	const handleLogIn = (e) => {
		e.preventDefault();
	}
	return (
		<div className="auth-main-container">
			<div className="log-in-container">
				<form className="log-in-form">
					<h3>Log-in</h3>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password"/>
					<button onClick={handleLogIn} type="submit">Log-in</button>
					<button>Log-in with Google</button>
				</form>
			</div>
			<div className="sign-up-container">
				<form action="" className="sign-up-form">
					<h3>Sign-up</h3>
					<input type="text" placeholder="First Name"/>
					<input type="text" placeholder="Last Name"/>
					<input type="email" placeholder="Email"/>
					<input type="password" placeholder="Password"/>
					<input type="password" placeholder="Confirm Password"/>
					<input type="text" placeholder="Insurance" />
					<input type="text" placeholder="Insurance Plan" />
					<button>Sign-up</button>
				</form>
			</div>
		</div>
	)
}
export default Authorization;
