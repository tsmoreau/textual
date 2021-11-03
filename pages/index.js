import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import usePersonalSign, { hexlify } from "../hooks/usePersonalSign";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Nav/Footer";
export default function Home({ isConnected }) {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const sign = usePersonalSign();

  const handleSign = async () => {
    const msg = "Next Web3 Boilerplate Rules";
    const sig = await sign(msg);
    console.log(sig);
    console.log("isValid", verifyMessage(msg, sig) === account);
  };

  const isConnected2 = typeof account === "string" && !!library;

  return (
    <div className="">
      <Head>
        <title>depict limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="pb-4 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500 min-h-screen">
        <div className="mt-24 px-12 bg-gray-100 h-96 w-11/12"></div>
        <h2 className="mt-12 flex mx-auto text-gray-200 text-4xl font-bold font-mono">
          premium nft projects
        </h2>

        <div class="mt-8 px-8 md:px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          <div className="pb-2 px-8 border rounded-md mx-1 mb-2">
            <h2 className="flex justify-center py-4 mx-auto text-gray-600 text-lg font-bold font-mono">
              featuring:
            </h2>
            <ul className="flex flex-col mx-auto">
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                on-chain art
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                multi-chain mechanics
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                hidden token functionality
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                physical item tokens
              </li>
              <li className="pt-4 pb-4 mx-auto text-lg font-bold font-mono text-gray-600">
                and more...
              </li>
            </ul>
          </div>

          <div className="px-8 border rounded-md  mx-1 mb-2">
            <ul className=" flex flex-col justify-center">
              <li className="text-center  pt-4 pb-4 mx-auto text-lg font-bold font-mono text-gray-600">
                season01 main drops:
              </li>
              <li className="text-center mx-auto text-md font-bold font-mono text-gray-800">
                drop01 **shifty_sharks** LIVE 11/15/21
              </li>
              <li className="text-center mx-auto text-md font-bold font-mono text-gray-800">
                drop02 **machine_elves** LIVE 12/15/21
              </li>
              <li className="text-center  mx-auto text-md font-bold font-mono text-gray-800">
                drop03 **metahumans** LIVE 1/15/21
              </li>
              <li className="text-center mx-auto text-md font-bold font-mono text-gray-800">
                drop04 **woodblocks** LIVE 2/15/21
              </li>
              <li className="pt-4 pb-4 mx-auto text-lg font-bold font-mono text-gray-600">
                monthly releases
              </li>
            </ul>
          </div>

          <div className="pb-2  border rounded-md  mx-1 mb-2">
            <h2 className="flex justify-center py-4 mx-auto text-gray-600 text-lg font-bold font-mono">
              learn more:
            </h2>
            <ul className="flex flex-col mx-auto">
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                discord
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                twitter
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                blog
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-800">
                faq
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-24 hidden">
          {isConnected ? (
            <h2 className="mx-auto text-lg">You are connected to MongoDB</h2>
          ) : (
            <h2 className="mx-auto text-lg">
              You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
              for instructions.
            </h2>
          )}
          {isConnected2 ? (
            <h2 className="mx-auto text-lg">
              You are connected to the Blockchain
            </h2>
          ) : (
            <h2 className="mx-auto text-lg">
              You are NOT connected to the Blockchain, please press the Connect
              Button
            </h2>
          )}
          {isConnected2 && (
            <section>
              <ETHBalance />
              <button onClick={handleSign}>Personal Sign</button>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected }
  };
}
