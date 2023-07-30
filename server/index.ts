import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectToMongo } from './schema/mongo.connect';
import { orphanageRouter } from './src/orphnages/orphanage.router';
import { ngoRouter } from './src/ngos/ngo.router';
import { eventRouter } from './src/events/event.router';
import { blogRouter } from './src/blogs/blog.router';
import { userRouter } from './src/users/user.router';
import { impactRouter } from './src/impact/impact.router';

dotenv.config();
const app = express();
const port = process.env.PORT;
const allowedOrigins = [process.env.UI_ENDPOINT as string];
// const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

const options = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(options));
app.use(express.json());
app.use(cookieParser('mySecretKey'));

app.get('/', (req: Request, res: Response) => {
  throw new Error('');
});

app.use('/api/orphanage', orphanageRouter);
app.use('/api/impact', impactRouter);
app.use('/api/ngo', ngoRouter);
app.use('/api/event', eventRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

async function startServer() {
  try {
    await connectToMongo();
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1); // Terminate the process on server startup failure
  }
}

startServer();
