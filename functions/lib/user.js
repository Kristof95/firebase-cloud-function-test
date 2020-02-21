"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const functions = __importStar(require("firebase-functions"));
exports.checkIfEmailExist = functions
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
});
//# sourceMappingURL=user.js.map