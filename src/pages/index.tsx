import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>The last job on earth</title>
        <meta
          name="description"
          content="Our best guess of what the last human occupation will be once
          AI-powered robots take over the world..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌎</text></svg>"
        />
      </Head>
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-4xl text-center font-bold mb-5">
          The last job on earth 🌎
        </h1>
        <h2 className="text-2xl text-center mb-5">2023 Edition</h2>
        <h3>
          Our best guess of what the last human occupation will be once
          AI-powered robots take over the world...
        </h3>
      </main>
    </>
  );
}
