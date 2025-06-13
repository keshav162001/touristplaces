import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'images')));

const places = [
  {
    id: "1",
    name: "Taj Mahal",
    state: "Uttar Pradesh",
    description: "A beautiful marble monument in Agra.",
    imageUrl: "http://localhost:3000/images/taj_mahal.jpg"
  },
  {
    id: "2",
    name: "India Gate",
    state: "Delhi",
    description: "A war memorial in New Delhi.",
    imageUrl: "http://localhost:3000/images/india_gate.jpg"
  }
];

app.get('/api/places', (req, res) => {
  res.json(places);
});

app.listen(port, () => {
  console.log(`✅ API running at http://localhost:${port}`);
});