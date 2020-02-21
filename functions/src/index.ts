import admin from 'firebase-admin';
import { checkIfEmailExist } from "./user";

admin.initializeApp(
  credential: admin.credential.applicationDefault(),
);

export {
  checkIfEmailExist
};