/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/List.module.css";
import { Spinner } from "../../components/Spinner";

// export async function getStaticProps() {
//   const resp = await fetch(
//     "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
//   );

//   return {
//     props: {
//       pokemon: await resp.json(),
//     },
//   };
// }

export default function Home() {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await resp.json());
    }
    getPokemon();
  }, []);

  if (!pokemon) return <Spinner />;

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
