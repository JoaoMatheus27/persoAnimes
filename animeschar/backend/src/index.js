import  express from "express";
import cors from "cors";
import personagensRoutes from './routes/personagensRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/personagens',personagensRoutes);

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});