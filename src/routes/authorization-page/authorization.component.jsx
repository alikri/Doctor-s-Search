import "./authorization.styles.scss";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Amplify, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from '../../amplify-config';
import UserPage from "../user-page/user-page.component";




Amplify.configure(awsconfig);

const Authorization = ({ signOut, user }) => {

	const [userId, setCurrentUserId] = useState(null);
	
	useEffect(() => {
		Auth.currentSession()
			.then((data) => setCurrentUserId(data.accessToken.payload.client_id))
			.catch((err) => console.log(err));
	}, [userId])

	return (
		<div className="auth-main-container">
			<Navigate to={`/authorization/${userId}`} element={<UserPage user={user} username={user.username} signOut={signOut} />} />

		</div>
	)
}
export default withAuthenticator(Authorization);
