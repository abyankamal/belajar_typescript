import { Router, Request, Response, NextFunction } from "express";
import { get } from "./decorators/routes";
import { controller } from "./decorators/controller";

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response) {
        res.send(`
            <form method="POST">
                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" />
                </div>
                <div>
                    <label for="password">password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Send</button>
            </form>
        `);
    };
}