// pages/index.js
import Head from 'next/head';
import Sheet from '../components/Sheet';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Inventory App</title>
        <meta name="description" content="Inventory management app with searchable sheets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Inventory App</h1>
        <Sheet />
        {/* Add more Sheet components as needed */}
      </main>
    </div>
  );
};

export default IndexPage;
