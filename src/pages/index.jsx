import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";

export default function Index() {
  return (
    <Layout>
      <Container>
        <p>
          I am a San Francisco native, self-taught programmer with a certificate
          in Full-Stack Web Development from Bloom Institute of Technology.
        </p>
        <p>
          I have experience collaborating with teams in a remote environment,
          most recently working in the nonprofit tech world at Multiple; a
          nonprofit community accelerator program for startups in the Autism and
          Disability ecosystem.
        </p>
        <p>
          My skill set includes: Javascript, React, HTML/CSS, and CMS’s such as
          Squarespace to build fully functional web applications. I’m skilled
          with developing web-based platforms and designing website content to
          help increase engagement, marketing, and programmatic opportunities
          for the companies I’ve worked for. This year, I am looking to launch
          my programming career at a company in the Bay area where I can grow
          with the team and develop software that impacts the world.
        </p>
        <p>
          In my free time, I enjoy going fishing, playing computer games, and
          walking. I’ve recently developed an interest in fly fishing and
          camping, and look forward to pursuing that this summer.
        </p>
        <p>
          Things I value in life and on the job include: ability to work
          independently, feeling like I’m a critical part of the team,
          dependability, challenge, accomplishment, having fun with coworkers
          and with what I do, and being with an organization that values
          professionalism.
        </p>
      </Container>
    </Layout>
  );
}
