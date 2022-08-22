import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

class Auth {
  constructor(app) {
    this.auth = getAuth(app);
    this.providerGoogle = new GoogleAuthProvider();
    this.providerGithub = new GithubAuthProvider();
  }

  findMethod(method) {
    switch (method) {
      case 'Google':
        return this.providerGoogle;
      case 'Github':
        return this.providerGithub;
      default:
        throw new Error(`not supported provider: ${method}`);
    }
  }

  async login(method) {
    const provider = this.findMethod(method);
    try {
      return await signInWithPopup(this.auth, provider);
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

  onAuthChange(userCheck) {
    onAuthStateChanged(this.auth, userCheck);
  }
}

export default Auth;
