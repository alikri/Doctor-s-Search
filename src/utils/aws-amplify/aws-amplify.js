import { Auth, Amplify } from 'aws-amplify';
import awsconfig from '../../amplify-config';

Amplify.configure(awsconfig);

export const signUpUser = async (username, password, firstName, lastName, insurance, insurancePlan) => {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                'custom:firstName': firstName,          // optional
				'custom:lastName': lastName,
				'custom:insurance':insurance,
				'custom:insurancePlan':insurancePlan,
				   // optional - E.164 number convention
                // other custom attributes 
            },
            autoSignIn: { // optional - enables auto sign in after user is confirmed
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export const signInUser =  async (username, password) => {
    try {
		const user = await Auth.signIn(username, password);
		console.log("signed in")
		console.log(user);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export const signOutUser = async () => {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}