import admin from 'firebase-admin';
import { checkIfEmailExist } from "./user";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);
adminConfig.credential =  admin.credential.cert(require('../service-account-credentials.json'));

admin.initializeApp(adminConfig);

export {
  checkIfEmailExist
};