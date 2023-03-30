import Head from "next/head";
import { useState } from "react";
import OCCUPATIONS from "./../sample-data.json";

type Occupation = {
  id: string;
  name: string;
  vote_count: number;
};

const voteCountArray = OCCUPATIONS.map((occupation) => occupation.vote_count);
const initialVotes = voteCountArray.reduce((total, current) => total + current);

export default function Home() {
  const [occupations, setOccupations] = useState(OCCUPATIONS);
  const [totalVotes, setTotalVotes] = useState(initialVotes);

  function handleVote(index: number, occupation: Occupation) {
    occupation.vote_count += 1;
    const newOccupations = [...occupations];
    newOccupations[index] = occupation;
    newOccupations.sort((a, b) => b.vote_count - a.vote_count);
    setOccupations(newOccupations);

    setTotalVotes((previousCount) => previousCount + 1);
  }

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
        <h3 className="mb-5">
          Our best guess of what the last human occupation will be once
          AI-powered robots take over the world...
        </h3>
        <table className="table-fixed w-full">
          <thead>
            <tr className="border-b border-neutral-700">
              <th className="text-left text-lg py-5">#</th>
              <th className="text-left text-lg py-5">Job title</th>
              <th className="text-right text-lg py-5">Votes #</th>
              <th className="text-right text-lg py-5">Votes %</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {occupations.map((occupation, index) => (
              <tr
                className="border-b border-neutral-700"
                key={`occupation-${occupation.id}`}
              >
                <td className="py-3">{index + 1}</td>
                <td className="py-3">{occupation.name}</td>
                <td className="text-right py-3">{occupation.vote_count}</td>
                <td className="text-right py-3">
                  {((occupation.vote_count / totalVotes) * 100).toFixed(1)} %
                </td>
                <td className="text-right">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => handleVote(index, occupation)}
                  >
                    Vote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="text-center">Built with 💜 in Canada</footer>
    </>
  );
}
