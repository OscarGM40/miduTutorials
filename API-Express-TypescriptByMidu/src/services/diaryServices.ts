import { DiaryEntry } from '../types';
import diaryData from './diaries.json';

/* a esto se le llama aserción de tipos.Implica decirle al programa que una variable tiene que funcionar de una forma concreta,en este caso como un DiaryEntry[],lo cual puede hacer. */
export const getEntries = () => diaryData as Array<DiaryEntry>;

export const addEntry = (entry: DiaryEntry) => {
  diaryData.push(entry);
}

