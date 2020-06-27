import firebase from 'firebase/app';
import Config from '@/settings';
import 'firebase/firestore';

firebase.initializeApp(Config.Firebase);

const Database = firebase.firestore();
const FieldValue = firebase.firestore;

export { Database, FieldValue };