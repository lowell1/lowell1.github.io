import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import projectInfo from "./project-info";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function ProjectCard({ html, frontmatter }) {
  let screenshotImage = <></>;

  if (frontmatter.screenshotName && frontmatter.siteURL)
    screenshotImage = (
      <Card.Link href={frontmatter.siteURL}>
        <Card.Img src={`/images/projects/${frontmatter.screenshotName}`} />
      </Card.Link>
    );
  else if (frontmatter.screenshotName)
    screenshotImage = (
      <Card.Img src={`/images/projects/${frontmatter.screenshotName}`} />
    );

  return (
    <Card>
      {screenshotImage}
      <Card.Body>
        <Card.Title>{frontmatter.title}</Card.Title>
        <Card.Text
          as="div"
          dangerouslySetInnerHTML={{ __html: html }}
        ></Card.Text>
      </Card.Body>
    </Card>
  );

  // return (

  // <Card>
  //   {project.screenshotName && (
  //     <Card.Img
  //       variant="top"
  //       src={`public/images/projects/${project.screenshotName}`}
  //     />
  //   )}
  //   <Card.Body>
  //     <Card.Title>{project.title}</Card.Title>
  //     <Card.Text>{project.description}</Card.Text>
  //   </Card.Body>
  // </Card>
  // );
}

export default function Projects({ data }) {
  console.log(data);

  return (
    <Layout>
      {/* <Container className="d-flex flex-wrap justify-content-center"> */}
      <Container
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
        }}
      >
        {data.allMarkdownRemark.nodes.map((node) => (
          <>
            <ProjectCard
              html={node.html}
              frontmatter={node.frontmatter}
              key={node.key}
            />
          </>
        ))}
        {/* {projectInfo.map((project) => (
          <ProjectCard project={project} />
        ))} */}
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`{
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*/projects/.*\\.md/"}}) {
    nodes {
      html
      fileAbsolutePath
      frontmatter {
        title
        screenshotName
        siteURL
        frontEndRepoURL
        backEndRepoURL
      }
    }
  }
}`;

// export default function Projects() {
//   return (
//     <Layout>
//       <Container>
//         <Carousel interval={null}>
//           {projectInfo.map((project) => {
//             console.log(project.screenshot);
//             return (
//               <Carousel.Item className="border border-red">
//                 {project.screenshotName ? (
//                   project.siteUrl ? (
//                     <a href={project.siteUrl}>
//                       <img
//                         alt="screenshot of project"
//                         src={`/images/projects/${project.screenshotName}`}
//                         style={{ height: "50vh" }}
//                       />nodes "50vh" }}></div>
//                 )}
//                 <Carousel.Caption>
//                   {/* <div className="bg-black"> *description: System for teachers to create and automatically grade tests for students.

//             );
//           })}
//         </Carousel>
//       </Container>
//     </Layout>
//   );
// }
