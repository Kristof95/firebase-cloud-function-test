/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

export const checkIfEmailExist = functions
.region('europe-west1')
.https.onCall(async () => {
  console.log("TESZT CLOUD FUNCTION");
  // console.log(context);
  // await admin.firestore().collection("users").where('email', '==', 'matrixsprt@gmail.com').get()
  // .then((snapshot) => {
  // snapshot.forEach((doc) => {
  //    console.log(doc.data());
  //   })
  // });
})