import * as admin from 'firebase-admin';
import { grantRoles, checkIfEmailExist } from "./user";

const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG as string);
adminConfig.credential =  admin.credential.cert(require('../service-account-credentials.json'));

admin.initializeApp(adminConfig);

export {
  grantRoles,
  checkIfEmailExist
};