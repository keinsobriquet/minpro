import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { AttendeeRouter } from './routers/attendee.router';
import { EventRouter } from './routers/event.router';
import { EORouter } from './routers/eo.router';
import { AuthRouter } from './routers/auth.router';
import { TransactionRouter } from './routers/transaction.router';

export default class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private handleError(): void {
    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });

    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (req.path.includes('/api/')) {
          console.error('Error : ', err.stack);
          res.status(500).send('Error !');
        } else {
          next();
        }
      },
    );
  }

  private routes(): void {
    const authRouter = new AuthRouter()
    const attendeeRouter = new AttendeeRouter();
    const eventRouter = new EventRouter();
    const eoRouter = new EORouter()
    const transactionRouter = new TransactionRouter()

    this.app.get('/api', (req: Request, res: Response) => {
      res.send(`Hello, Purwadhika Student API!`);
    });

    this.app.use('/api/attendee', attendeeRouter.getRouter());
    this.app.use('/api/auth',authRouter.getRouter())
    this.app.use('/api/event', eventRouter.getRouter());
    this.app.use('/api/eventorg', eoRouter.getRouter())
    this.app.use('/api/transaction', transactionRouter.getRouter())
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
