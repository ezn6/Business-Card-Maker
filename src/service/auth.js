import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';

class Auth {
  constructor() {
    this.providerGoogle = new GoogleAuthProvider();
    this.auth = getAuth();
    this.providerGithub = new GithubAuthProvider();
  }

  async loginGoogle() {
    try {
      return await signInWithPopup(this.auth, this.providerGoogle);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  }

  async loginGithub() {
    try {
      return await signInWithPopup(this.auth, this.providerGithub);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    }
  }

  async logout() {
    await signOut(this.auth);
  }
}

export default Auth;
