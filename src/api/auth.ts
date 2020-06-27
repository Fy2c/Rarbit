import firebase from 'firebase';

export default {
  signInByFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },

  logOut() {
    return firebase.auth().signOut();
  }
};
