import * as async from "async";
import { Request, Response, NextFunction } from "express";

import { UserModel } from "../../models/User";
import * as userUtil from "./user.helper";

/**
 * GET /login
 * Login page.
 */
export let getLogin = (req: Request, res: Response) => {
    res.send("Login API");
};

