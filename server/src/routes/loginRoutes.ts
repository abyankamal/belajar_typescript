import { Router, Request, Response } from "express";

const router = Router();

router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: Request, res: Response) => {
    const { email, password } = req.body;

    res.send(email + password);
})

export {router};