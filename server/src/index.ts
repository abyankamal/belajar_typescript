import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import { AppRouter } from './appRouter';

const app = express();

app.use(cookieSession({keys: ['apaanatuh']}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());
app.use(router);

app.listen(2000, () => {
  console.log('Listening on this port : 2000');
});
