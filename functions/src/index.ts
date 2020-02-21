import admin from 'firebase-admin';
import { checkIfEmailExist } from "./user";

// admin.initializeApp(
//   {credential: admin.credential.applicationDefault()},
// );

let secret = process.env.DEFAULT_SERVICE_ACCOUNT_KEY;
const serviceAccount = require(secret || "");

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);
adminConfig.credential = admin.credential.cert(serviceAccount);

admin.initializeApp(adminConfig);

export {
  checkIfEmailExist
};