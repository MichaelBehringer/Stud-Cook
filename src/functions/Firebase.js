import {initializeApp} from "firebase/app";
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCYf_-QxreaHTXUz08jKGB5TBwJwa1An_k",
  authDomain: "stud-cook.firebaseapp.com",
  projectId: "stud-cook",
  storageBucket: "stud-cook.appspot.com",
  messagingSenderId: "822521068139",
  appId: "1:822521068139:web:9a3d9a3f746689c7010f2e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function readComment(recipeID) {
  const docRef = doc(db, 'comments/' + recipeID);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function addComment(recipeID, text, newId) {
  const docRef = doc(db, 'comments/' + recipeID);
  await setDoc(docRef, {
    [newId]: text
  }, {merge: true});
}