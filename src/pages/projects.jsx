import React from "react";
import Layout from "../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import projectInfo from "../content/project-info";

export default function Projects() {
  return (
    <Layout>
      <Carousel interval={null}>
        {projectInfo.map((project) => {
          console.log(project.screenshot);
          return (
            <Carousel.Item className="border border-red">
              {project.screenshotName ? (
                project.siteUrl ? (
                  <a href={project.siteUrl}>
                    <img
                      alt="screenshot of project"
                      src={`/images/projects/${project.screenshotName}`}
                      style={{ height: "50vh" }}
                    />
                  </a>
                ) : (
                  <img
                    alt="screenshot of project"
                    src={`/images/projects/${project.screenshotName}`}
                    style={{ height: "50vh" }}
                  />
                )
              ) : (
                <div className="bg-black" style={{ height: "50vh" }}></div>
              )}
              <Carousel.Caption>
                {/* <div className="bg-black"> */}
                <p style={{ webkitTextStroke: "1px black" }}>{project.name}</p>
                <p style={{ webkitTextStroke: "1px black" }}>
                  {project.description}
                </p>
                {/* </div> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Layout>
  );
}
