import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";
import CallToAction from "../components/CallToAction/CallToAction";

import AboutImg from "../assets/about-neurovision.jpg";
import DesignNetwork from "../assets/design-network.jpg";
import StructuredPath from "../assets/structured-path.jpg";
import Matthew from "../assets/matthew.jpg";
import Ashley from "../assets/ashley.jpg";
import Jantae from "../assets/jantae.jpg";
import Jason from "../assets/jason.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neurovision</title>
        <meta name="description" content="Welcome to Neurovision!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className=" banner_bg text-white h-screen ">
          <NavBar></NavBar>
          <section
            id="banner"
            className="px-10 py-10 pb-20 grid grid-cols-2 justify-content-center my-20"
          >
            <article className="">
              {" "}
              <h1 className="text-5xl font-medium">
                {" "}
                Neural Network Learning{" "}
                <span className="font-semibold"> Enhanced </span>
              </h1>
              <p className=" my-7 text-lg font-light">
                Learning Neural networks doesn{"'"}t have to be hard!
                <br />
                Neurovision provides a streamlined learning path that allows you
                to grasp the key concepts for neural networks in a fun and
                interactive way!
              </p>
              <CallToAction variantType={"primary"}></CallToAction>
            </article>
            <article></article>
          </section>
        </div>
        <section
          id="about"
          className="px-10 py-10 grid grid-cols-2 justify-items-center h-screen"
        >
          <article className="my-auto">
            {" "}
            <h4 className="text-primary font-semibold uppercase">
              ABOuT NEUROVISION{" "}
            </h4>
            <h1 className="text-4xl w-3/4 font-medium ">
              {" "}
              The <span className="font-semibold"> neural network </span>{" "}
              handbook!
            </h1>
            <p className="w-4/5 my-4 font-light">
              Regardless of your knowledge level, neurovision provides a robust
              toolset you can use to learn or reinforce your knowledge of neural
              networks.
              <br /> We do this by utilizing a step by step tour to walk you
              through the key concepts required to understand neural networks!
            </p>
            <CallToAction variantType={"primary"}></CallToAction>
          </article>
          <article className="rounded-md shadow-md my-auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DMDECliYMWM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </article>
        </section>
        <section
          id="process"
          className="mt-10 px-10 py-20 grid grid-cols-2 justify-items-center gap-20 process_bg h-screen"
        >
          <article className="shadow-md rounded-md my-auto">
            <Image
              className="rounded-md shadow-md"
              src={DesignNetwork}
              width="650px"
              height="400px"
              alt="design network"
            />
          </article>
          <article className="my-auto">
            {" "}
            <h4 className="text-white font-semibold uppercase my-3">
              HOW IT WORKS{" "}
            </h4>
            <h1 className="text-4xl  font-medium text-white">
              Design and experiment with neural networks in just a few clicks!
            </h1>
            <p className="w-4/5 my-4 font-light text-white">
              Neurovision allows you to get right into playing around with
              neural networks very quickly regardless of your knowledge level,
              and provides you with infographics if you would like to learn
              more!
            </p>
            <CallToAction variantType={"light"}></CallToAction>
          </article>
        </section>
        <section id="features" className="px-10 grid grid-cols-2 ">
          <article className="my-auto">
            {" "}
            <h4 className="text-primary font-semibold uppercase">
              OUR PROCESS
            </h4>
            <h1 className="text-4xl w-3/4 font-medium ">
              Structured Learning Path
            </h1>
            <p className="w-4/5 my-4 font-light">
              Neurovision provides a step by step, structured learning path to
              walk you through the key phases in preparing your data and
              building your neural network!
            </p>
            <CallToAction variantType={"primary"}></CallToAction>
          </article>
          <article className="">
            <Image
              alt="structured path"
              src={StructuredPath}
              height="600px"
              width="500px"
            />
          </article>
        </section>
        <section id="team " className="my-10 px-10">
          <h1 className="text-center font-semibold text-4xl">Meet the Team</h1>
          <div className="grid grid-cols-4 my-5">
            <article className="mx-5">
              <Image
                className="rounded-lg"
                src={Jason}
                height="360"
                width="310"
              />
              Jason Gayle
            </article>
            <article className="mx-5">
              <Image
                className="rounded-lg"
                src={Jantae}
                height="360"
                width="310"
              />
              Jantae Leckie
            </article>
            <article className="mx-5">
              <Image
                className="rounded-lg"
                src={Matthew}
                height="360"
                width="310"
              />
              Matthew Palmer
            </article>
            <article className="mx-5">
              <Image
                className="rounded-lg"
                src={Ashley}
                height="360"
                width="310"
              />
              Ashley Perkins
            </article>
          </div>
        </section>
      </main>

      <footer className="p-4 bg-primary_dark shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://neurovision.vercel.app/" className="hover:underline">
            Neurovision Visualization Tool
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
