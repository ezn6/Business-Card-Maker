import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from 'firebase/auth';

class Auth {
  constructor() {
    this.auth = getAuth();
    this.providerGoogle = new GoogleAuthProvider();
    this.providerGithub = new GithubAuthProvider();
  }

  findMethod(method) {
    switch (method) {
      case 'google':
        return this.providerGoogle;
      case 'github':
        return this.providerGithub;
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
}

export default Auth;
