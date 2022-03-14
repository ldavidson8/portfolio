import Head from "next/head";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Lewis Davidson | Web Developer &amp; Designer</title>
        <meta
          name="description"
          content="Lewis Davidson is a Fullstack Web Developer and Designer, based in the UK and loves to craft progressive and enhanced web applications"
        />
      </Head>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
