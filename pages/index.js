/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <Link href={`/pokemon`}>
        <a>
          <h1>Go to Pokemon <span style={{fontSize: 30}}>&rarr;</span></h1>
        </a>
      </Link>
    </div>
  );
}
