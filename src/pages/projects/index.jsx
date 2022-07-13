import React from "react";
import Layout from "../../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import projectInfo from "./project-info";

/**
 *       <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
 */

/**
       * 
       * name: "Testify",
    backEndRepoUrl: "https://github.com/Testify-bw/Backend",
    description:
      "System for teachers to create and automatically grade tests for students.",
    // role: `Helped design database structure
    // `,
    stack: "React, Bulma, Knex",
       */

// function CarouselItem({project}) {
//   return Carousel.Item
// }

export default function Projects() {
  return (
    <Layout>
      <Carousel>
        {projectInfo.map((project) => {
          console.log(project.screenshot);
          return (
            <Carousel.Item className="border border-red">
              <img
                alt="screenshot of project"
                src={`/images/projects/${project.screenshot}`}
              />
              <p>blah blah balh</p>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Layout>
  );
}
