import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import * as styles from '../styles/home.module.css'

const Home = () => {
  return (
    <Layout>
      <section className={styles.header} >
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Ux designer & web developer based in UK</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
      </section>
    </Layout>
  )
}

export default Home;
