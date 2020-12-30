import fetch from 'node-fetch';
import { Item } from '../interfaces';

const url = 'https://qiita.com/api/v2/users/ozaki25/items';

export async function fetchAll(): Promise<Item[]> {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
