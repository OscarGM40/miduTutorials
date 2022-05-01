import express, { Response } from "express";
const router = express.Router();

router.get("/", (_req, res: Response) => {
  res.send("Fetching all entry diaries");
});

router.post("/", (_req, res) => {
  res.send('Saving a diary entry');
});

export default router;