import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neurovision</title>
        <meta name="description" content="Welcome to Neurovision!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main>
        <section id="banner"></section>
        <section id="about"></section>
        <section id="process"></section>
        <section id="features"></section>
        <section id="team"></section>
      </main>

      <footer></footer>
    </div>
  );
}
