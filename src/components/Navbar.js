import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Navbar = () => {
  //  --  This is a Static Query  --
  // we can only use this hook once on the Component
  // here we're not able to use query variables
  // it's not necesary to write the query name
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  const { title } = data.site.siteMetadata;
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}

export default Navbar
