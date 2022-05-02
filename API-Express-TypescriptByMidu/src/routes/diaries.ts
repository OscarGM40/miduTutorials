import express, { Response } from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res: Response) => {
  res.send(diaryServices.getEntries())
})

router.get('/:id', (req, res: Response) => {
  const diary = diaryServices.findById(Number(req.params.id))
  if (diary !== null) {
    res.send(diary)
  } else {
    res.sendStatus(404)
  }
})

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  const newDiaryEntry = diaryServices.addDiaryEntry({
    date,
    weather,
    visibility,
    comment
  })

  res.json(newDiaryEntry)
})

export default router
