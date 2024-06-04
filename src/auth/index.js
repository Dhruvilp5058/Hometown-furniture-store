import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'

export const _signwithGoogle = async () => {
    try {
        GoogleSignin.configure({
            webClientId: '585180573470-99eqr5h8e23aktelkbc8j4pg8qfrcnpp.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        });
        await GoogleSignin.hasPlayServices();
        const userinfo = await GoogleSignin.signIn();

        const { idToken } = await GoogleSignin.signIn();
        const googlecrendentials = auth.GoogleAuthProvider.credential(idToken);
        auth().signInWithCredential(googlecrendentials)
        return userinfo;
    } catch (error) {
        console.log('>>>Google sign in ', error);
        return null
    }
}
