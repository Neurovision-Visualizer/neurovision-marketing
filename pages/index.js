import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";
import CallToAction from "../components/CallToAction/CallToAction";

import AboutImg from "../assets/about-neurovision.jpg";
import DesignNetwork from "../assets/design-network.jpg";
import StructuredPath from "../assets/structured-path.jpg";

export default function Home() {
  return (
    <div classNameName={styles.container}>
      <Head>
        <title>Neurovision</title>
        <meta name="description" content="Welcome to Neurovision!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar></NavBar>
        <section
          id="banner"
          className="px-8 py-10 grid grid-cols-2 justify-items-center"
        >
          <article>
            {" "}
            <h1 className="text-4xl w-3/4 font-medium ">
              {" "}
              Neural Network Learning{" "}
              <span className="font-semibold"> Enhanced </span>
            </h1>
            <p className="w-4/5 my-4 font-light">
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
        <section
          id="about"
          className="px-8 py-10 grid grid-cols-2 justify-items-center"
        >
          <article>
            {" "}
            <h4 className="text-primary font-semibold uppercase">
              ABOuT NEUROVISION{" "}
            </h4>
            <h1 className="text-4xl w-3/4 font-medium ">
              {" "}
              Neural Network Learning{" "}
              <span className="font-semibold"> Enhanced </span>
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
          <article className="rounded-md shadow-md">
            <Image alt="about" src={AboutImg} width="650px" height="400px" />
          </article>
        </section>
        <section
          id="process"
          className="mt-10 px-8 py-20 grid grid-cols-2 justify-items-center gap-20 process_bg"
        >
          <article className="shadow-md rounded-md">
            <Image
              className="rounded-md shadow-md"
              src={DesignNetwork}
              width="650px"
              height="400px"
              alt="design network"
            />
          </article>
          <article>
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
        <section id="features" className="px-8 grid grid-cols-2 ">
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
        <section id="team"></section>
      </main>

      <footer></footer>
    </div>
  );
}
