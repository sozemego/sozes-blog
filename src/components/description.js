import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"

function Description() {
  let data = useStaticQuery(graphql`
    query Description {
      site {
        siteMetadata {
          author
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  let { description } = data.site.siteMetadata

  return (
    <div
      style={{
        display: `flex`,
        flexDisplay: "column",
        marginBottom: rhythm(2.5),
      }}
    >
      <p>{description}</p>
    </div>
  )
}

export default Description
