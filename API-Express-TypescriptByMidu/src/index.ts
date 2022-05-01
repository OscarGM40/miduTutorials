import express from "express";
const app = express();

import diaryRouter from './routes/diaries';

app.use(express.json()); // for parsing application/json

const PORT = 3000;

app.use('/api/diaries',diaryRouter);

app.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}`);
});
