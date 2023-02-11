import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Game = dynamic(() => import("../components/game"), { ssr: false });

export default function Index() {
  return (
    <>
      <Head>
        <title>WikitriviaRO</title>
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />

        <link rel="shortcut icon" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="shortcut icon" sizes="512x512" href="/android-chrome-512x512.png" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="120x120" />

      </Head>

      <Game />
    </>
  );
}
