import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction) : void {
    if(req.session && req.session.loggedIn) {
        next();
        return;
    }

    res.status(403);
    res.send('Not Permitted');
}

const router = Router();



router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if(email && password && email === 'kamalmuhammad414@gmail.com' && password === '12345678') {
        req.session = { loggedIn: true };
        res.redirect('/');
    } else {
        res.send(`Invalid email or password`);
    }
});

router.get('/', (req: Request, res: Response) => {
    if(req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <h1>You Are Logged In</h1>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <h1>You Are Not Logged In</h1>
                <a href="/login">Login</a>
            </div>
        `)
    }
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

router.get('/protected', requireAuth ,(req: Request, res: Response) => {
    res.send('Welcome to protected route, logged in successfully')
});

export {router};