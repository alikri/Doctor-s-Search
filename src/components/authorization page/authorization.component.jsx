import "./authorization.styles.scss";
import { useState } from "react";

const Authorization = () => {

	const [logInForm, setLogInForm] = useState({
		email: "",
		password: ""
	})
	const [signUpForm, setSignUpForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
		insurance: "",
		insurancePlan: ""
	})

	console.log("log in from below");
	console.log(logInForm);
	console.log("sign-up form below");
	console.log(signUpForm);

	const handleLogIn = (e) => {
		e.preventDefault();
		setLogInForm({
			email: "",
			password: ""
		});
		
	}
	const handleSignUp = (e) => {
		e.preventDefault();
		setSignUpForm({
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
			insurance: "",
			insurancePlan: ""
		});
	}

	const handleLogInInputChange = (e) => {
		setLogInForm(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })

	}
	const handleSignUpInputChange = (e) => {
		setSignUpForm(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
	}


	return (
		<div className="auth-main-container">
			<div className="log-in-container">
				<form className="log-in-form">
					<h3>Log-in</h3>
					<input
						value={logInForm.email}
						onChange={handleLogInInputChange}
						type="email"
						placeholder="Email"
						name="email"
					/>
					<input
						value={logInForm.password}
						onChange={handleLogInInputChange}
						type="password"
						placeholder="Password"
						name="password"
					/>
					<button
						onClick={handleLogIn}
						type="submit">Log-in</button>
					<button>Log-in with Google</button>
				</form>
			</div>
			<div className="sign-up-container">
				<form onClick={handleSignUp} className="sign-up-form">
					<h3>Sign-up</h3>
					<input
						value={signUpForm.firstName}
						type="text"
						onChange={handleSignUpInputChange}
						placeholder="First Name"
						name="firstName"
					/>
					<input
						value={signUpForm.lastName}
						type="text"
						onChange={handleSignUpInputChange}
						placeholder="Last Name"
						name="lastName"
					/>
					<input
						value={signUpForm.email}
						type="email"
						onChange={handleSignUpInputChange}
						placeholder="Email"
						name="email"
					/>
					<input
						value={signUpForm.password}
						type="password"
						onChange={handleSignUpInputChange}
						placeholder="Password"
						name="password"
					/>
					<input
						value={signUpForm.confirmPassword}
						type="password"
						onChange={handleSignUpInputChange}
						placeholder="Confirm Password"
						name="confirmPassword"
					/>
					<input
						value={signUpForm.insurance}
						type="text"
						onChange={handleSignUpInputChange}
						placeholder="Insurance"
						name="insurance"
					/>
					<input
						value={signUpForm.insurancePlan}
						type="text"
						onChange={handleSignUpInputChange}
						placeholder="Insurance Plan"
						name="insurancePlan"
					/>
					<button>Sign-up</button>
				</form>
			</div>
		</div>
	)
}
export default Authorization;
