"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not Permitted');
}
const router = (0, express_1.Router)();
exports.router = router;
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'kamalmuhammad414@gmail.com' && password === '12345678') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send(`Invalid email or password`);
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <h1>You Are Logged In</h1>
                <a href="/logout">Logout</a>
            </div>
        `);
    }
    else {
        res.send(`
            <div>
                <h1>You Are Not Logged In</h1>
                <a href="/login">Login</a>
            </div>
        `);
    }
});
router.get('/logout', (req, res) => {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, (req, res) => {
    res.send('Welcome to protected route, logged in successfully');
});
