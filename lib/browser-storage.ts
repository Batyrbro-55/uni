import records from '@/data/universities.json';
import type {University} from './types';

const key='admissions-atlas-progress-v1';
type Progress=Pick<University,'status'|'notes'|'hidden'|'checklist'>;
function read():Record<string,Partial<Progress>> {
  const value=localStorage.getItem(key);
  if(!value)return {};
  const data=JSON.parse(value);
  if(!data||typeof data!=='object'||Array.isArray(data))throw Error('Saved progress could not be read. Export browser data before resetting storage.');
  return data;
}
export function readUniversities():University[]{
  const progress=read();
  return (records as University[]).map(u=>({...u,...progress[u.id]}));
}
export function saveProgress(id:string,patch:Partial<Progress>){
  const progress=read();
  progress[id]={...progress[id],...patch};
  try{localStorage.setItem(key,JSON.stringify(progress));}
  catch{throw Error('Browser storage is unavailable or full. Your changes have not been saved.');}
}
