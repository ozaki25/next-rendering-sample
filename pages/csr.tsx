import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchAll } from '../utils/qiitaApi';
import { Item } from '../interfaces';

function CSR() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetchAll().then(result => setItems(result));
  }, []);

  return (
    <div>
      <h1>Hello Client Side Rendering</h1>
      {!items.length && <p>...loading</p>}
      {items.map(item => (
        <p key={item.id}>
          <Link href={item.url}>
            <a target="_blank">{item.title}</a>
          </Link>
        </p>
      ))}
    </div>
  );
}

export default CSR;
