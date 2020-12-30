import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>
        <Link href="/csr">
          <a>CSR Sample</a>
        </Link>
        {'　'}
        <Link href="/ssr">
          <a>SSR Sample</a>
        </Link>
        {'　'}
        <Link href="/ssg">
          <a>SSG Sample</a>
        </Link>
      </p>
    </div>
  );
}
