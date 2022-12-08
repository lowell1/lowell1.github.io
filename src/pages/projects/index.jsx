import React from "react";
import Layout from "../../components/Layout";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import projectInfo from "./project-info";
import Card from "react-bootstrap/Card";

function ProjectCard({ project }) {
  return (
    <Card>
      {project.screenshotName && (
        <Card.Img
          variant="top"
          src={`public/images/projects/${project.screenshotName}`}
        />
      )}
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function Projects() {
  return (
    <Layout>
      {/* <Container className="d-flex flex-wrap justify-content-center"> */}
      <Container>
        {projectInfo.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Container>
    </Layout>
  );
}

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
//                       />
//                     </a>
//                   ) : (
//                     <img
//                       alt="screenshot of project"
//                       src={`/images/projects/${project.screenshotName}`}
//                       style={{ height: "50vh" }}
//                     />
//                   )
//                 ) : (
//                   <div className="bg-black" style={{ height: "50vh" }}></div>
//                 )}
//                 <Carousel.Caption>
//                   {/* <div className="bg-black"> */}
//                   <p style={{ webkitTextStroke: "1px black" }}>
//                     {project.name}
//                   </p>
//                   <p style={{ webkitTextStroke: "1px black" }}>
//                     {project.description}
//                   </p>
//                   {/* </div> */}
//                 </Carousel.Caption>
//               </Carousel.Item>
//             );
//           })}
//         </Carousel>
//       </Container>
//     </Layout>
//   );
// }
