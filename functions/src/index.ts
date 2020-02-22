import admin from "firebase-admin";
import sendMail  from "./user";

admin.initializeApp(
  {credential: admin.credential.applicationDefault()},
);

export {
  sendMail
};