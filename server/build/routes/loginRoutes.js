"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    res.send(email + password);
});
