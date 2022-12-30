import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useStaticQuery, graphql } from "gatsby";

export default function ProjectCarousel() {
  const queryData = useStaticQuery(graphql`{
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
  }`);

  queryData.allMarkdownRemark.nodes.map((a) => console.log(a.html));
  return (
    <Carousel variant="dark" interval={null}>
      {queryData.allMarkdownRemark.nodes.map((node) => (
        <Carousel.Item className="text-center" key={node.frontmatter.title}>
          <h2>{node.frontmatter.title}</h2>
          <div
            // className="w-75 mx-auto"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
          {/* <div className="d-block" style={{ minHeight: "15rem" }}></div>
          <Carousel.Caption>
            <h2>{node.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}
