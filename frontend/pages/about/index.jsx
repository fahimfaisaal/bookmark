import Head from 'next/head';

function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Bookmark application about page" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/2/2f/Icon-green-line-b-default.svg"
        />
      </Head>
      <h1>About Page</h1>;
    </div>
  );
}

export default About;
