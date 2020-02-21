"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const user_1 = require("./user");
exports.checkIfEmailExist = user_1.checkIfEmailExist;
// admin.initializeApp(
//   {credential: admin.credential.applicationDefault()},
// );
let secret = process.env.DEFAULT_SERVICE_ACCOUNT_KEY;
console.log(`EHH ${secret}`);
const serviceAccount = require(secret || "");
const adminConfig = JSON.parse(process.env.FIREBASE_CONFIG);
adminConfig.credential = firebase_admin_1.default.credential.cert(serviceAccount);
firebase_admin_1.default.initializeApp(adminConfig);
//# sourceMappingURL=index.js.map