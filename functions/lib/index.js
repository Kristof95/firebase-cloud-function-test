"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const user_1 = require("./user");
exports.checkIfEmailExist = user_1.checkIfEmailExist;
firebase_admin_1.default.initializeApp({ credential: firebase_admin_1.default.credential.applicationDefault() });
//# sourceMappingURL=index.js.map