import { useEffect, useState } from 'react';
import fetch from 'node-fetch';

function CSR() {
  const [items, setItems] = useState([]);
  useEffect(() => {}, []);

  return <h1>Hello Client Side Rendering</h1>;
}

export default CSR;
