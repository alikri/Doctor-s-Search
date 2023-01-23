import "./authorization.styles.scss";
import { Link } from "react-router-dom";
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../../amplify-config';
import UserPage from "../user-page/user-page.component";
import { useContext } from "react";
import { ContextUser } from "../../context/user.context";


Amplify.configure(awsconfig);

const Authorization = ({ signOut, user }) => {
	return (
		<div className="auth-main-container">
			<UserPage user={user} username={user.username} signOut={signOut} />
		</div>
	)
}
export default withAuthenticator(Authorization);
