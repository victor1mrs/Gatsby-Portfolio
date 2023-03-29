import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <h3>Portfolio & Websites I've Created</h3>
        <div className={styles.projects}>
          {projects.map(project => {
            const image = getImage(project.frontmatter.thumb)
            return (
              <Link to={project.frontmatter.slug} key={project.id}>
                <div>
                  <GatsbyImage image={image} alt={project.frontmatter.title} />
                  <h3>{project.frontmatter.title}</h3>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            )
          })}
        </div>
        <p>Like what you see? Email me at <b>{contact}</b> for a quote!</p>
      </div>
    </Layout>
  )
}

export default Projects

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
` 
