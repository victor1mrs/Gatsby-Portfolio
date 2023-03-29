import React from 'react'
import Layout from '../components/Layout';
import { Link, graphql } from 'gatsby';
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Home = ({data}) => {
  const image = getImage(data.file)
  return (
    <Layout>
      <section className={styles.header} >
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux designer & web developer based in UK</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        {/* <img src="/banner.png" alt="site banner" style={{maxWidth: '100%'}}></img> */}
        <GatsbyImage image={image} alt={data.file?.name} />
      </section>
    </Layout>
  )
}

export default Home;

//  --  This is a Page Query  --
// This is the way to run grapql querys on a page component, in here we can use query variables

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      id
      name
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
