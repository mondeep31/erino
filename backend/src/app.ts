import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes';
import { errorHandler } from './middlewares/errorHandler';


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", contactRoutes);
app.use(errorHandler);

export default app;