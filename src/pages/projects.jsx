import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

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
      }
    }
  }
}`;
