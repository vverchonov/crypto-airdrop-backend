import { Router } from "express";
import userController from "../controllers/user-controller.js";

const userRouter = Router();

// {
//     user: {
//         wallet: walletToSend,
//         twitter: twitterToSend,
//         twitterLink: twitterLinkToSend,
//         telegram: telegramToSend,
//     }
// }
userRouter.post("/addUpdateUser", userController.addUser);

// {
//         wallet: walletToSend,
// }
userRouter.post("/checkUserByWallet", userController.checkUserByWallet);

export default userRouter;
