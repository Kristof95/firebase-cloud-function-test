"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const MAIL_API_KEY = functions.config().sendgrid.key;
const MAIL_TEMPLATE = functions.config().sendgrid.template;
const APP_URL = functions.config().app.url;
mail_1.default.setApiKey(MAIL_API_KEY);
const sendWelcomeMail = (email) => {
    const message = {
        to: email,
        from: 'matrixsprt@gmail.com',
        templateId: MAIL_TEMPLATE,
        dynamicTemplateData: {
            subject: 'De jó, hogy itt vagy!',
            name: email,
            app_url: APP_URL,
        },
    };
    return mail_1.default.send(message);
};
exports.sendMail = functions
    .region('europe-west1')
    .https.onCall(async (data, context) => {
    console.log(data);
    console.log(context);
    await sendWelcomeMail("matrixsprt@gmail.com");
});
exports.default = exports.sendMail;
//# sourceMappingURL=user.js.map