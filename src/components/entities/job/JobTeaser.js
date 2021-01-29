import React from "react"
import * as variable from "../../variables"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../../utils/linkResolver"
import prismicHtmlSerializer from "../../../gatsby/htmlSerializer"

const JobTeaserStyle = styled.article`
  background: linear-gradient(180deg, #a9b9c2 0%, #c4ced4 100%);
  padding: 35px;
  h2 {
    font-size: 27px;
    line-height: 37px;
    font-weight: 900;
    border: 1px solid rgba(0, 53, 82, 0.65);
    color: ${variable.trueBlue};
    width: 100%;
    padding: 10px 20px;
    margin: 0px 0px 20px 0px;
    text-align: center;
  }
  a {
    color: ${variable.darkGray};
  }
  .location {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
  .travel {
    margin-top: 5px;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  .jobteaser {
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
`
export const JobTeaser = ({ post }) => {
  const data = useStaticQuery(graphql`
    query blogteaser {
      usericon: file(relativePath: { eq: "user-gray.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      calendaricon: file(relativePath: { eq: "calendar-gray.png" }) {
        childImageSharp {
          fixed(width: 20, height: 22) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  const usericon = data.usericon.childImageSharp.fixed
  const calendaricon = data.calendaricon.childImageSharp.fixed
  return (
    <JobTeaserStyle>
      {/* <Link to={"/current-opportunity/" + post.uid}> */}
      <h2>{post.data.title.text}</h2>
      {post.data.location && (
        <div className="location">
          <Img fixed={calendaricon} style={{ marginRight: "10px" }} />
          {post.data.location.text}
        </div>
      )}
      {post.data.travel && (
        <div className="travel">
          <Img fixed={usericon} style={{ marginRight: "10px" }} />
          {post.data.travel}
        </div>
      )}
      <div
        className="jobteaser"
        dangerouslySetInnerHTML={{
          __html: post.data.teaser_description.html,
        }}
      />
      {/* </Link> */}
    </JobTeaserStyle>
  )
}

export default JobTeaser
