import firebase from "firebase";

class AuthApi {
  public signInByFacebook(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }

  public logOut(): Promise<void> {
    return firebase.auth().signOut();
  }
}

export default new AuthApi();
