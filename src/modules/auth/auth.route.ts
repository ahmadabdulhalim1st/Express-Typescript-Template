import { Router } from "express";
import { validate } from "@common/middlewares/validation";
import { signUpSchema, signInSchema, signOutSchema, forgetPasswordSchema, resetPassworSchema } from "@common/validators/user.validator";
import { toNodeHandler } from "better-auth/node";
import { auth } from "@lib/better-auth/auth";
const router: Router = Router();

router.route("/sign-up/email").post(validate({ body: signUpSchema }), toNodeHandler(auth));
router.route("/sign-in/email").post(validate({ body: signInSchema }), toNodeHandler(auth));
router.route("/get-session").get(toNodeHandler(auth));
router.route("/request-password-reset").post(validate({ body: forgetPasswordSchema }), toNodeHandler(auth));
router.route("/reset-password").post(validate({ body: resetPassworSchema }), toNodeHandler(auth));
router.route("/token").get(toNodeHandler(auth));
router.route("/sign-out").post(validate({ body: signOutSchema }), toNodeHandler(auth));
router.route("/verify-email").get(toNodeHandler(auth));
router.route("/ok").get(toNodeHandler(auth));
export default router;
