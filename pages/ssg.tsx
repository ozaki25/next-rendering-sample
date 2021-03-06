import Link from 'next/link';
import { fetchAll } from '../utils/qiitaApi';
import { Item } from '../interfaces';

type Props = {
  items: Item[];
};

function SSG({ items }: Props) {
  return (
    <div>
      <h1>Hello Static Generation</h1>
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

export async function getStaticProps() {
  const items = await fetchAll();
  return {
    props: {
      items,
    },
  };
}

export default SSG;
