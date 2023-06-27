import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToMongo } from './schema/mongo.connect';
import { orphanageRouter } from './src/orphnages/orphanage.router';
import { ngoRouter } from './src/ngos/ngo.router';
import { eventRouter } from './src/events/event.router';
import { blogRouter } from './src/blogs/blog.router';

dotenv.config();
const app = express();
const port = 5000;
const allowedOrigins = [`${process.env.UI_ENDPOINT}`];
// const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];

const options = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(cors(options));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  throw new Error('');
});

app.use('/api/orphanage', orphanageRouter);
app.use('/api/ngo', ngoRouter);
app.use('/api/event', eventRouter);
app.use('/api/blog', blogRouter);

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
