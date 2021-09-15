import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as variable from "../components/variables"
import styled from "styled-components"
import Container from "../components/container"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { RichText } from "prismic-reactjs"
import prismicHtmlSerializer from "../gatsby/htmlSerializer"
import linkResolver from "../utils/linkResolver"
// import { withPreview } from 'gatsby-source-prismic'

const JobStyle = styled.div`
  background: linear-gradient(
    119.79deg,
    #97231c 0%,
    #d0482c 67.37%,
    #f46036 118.87%
  );
  border-bottom-right-radius: 100%;
  box-shadow: inset 0 0 10px #000000;
  > div {
    padding: ${variable.sectionPadding};
    min-height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    padding-top: 100px;
  }
`
const Job = (props) => {
  const job = props.data.job
  const site = props.data.site
  console.log(job)
  return (
    <Layout>
      <SEO site={site} page={job} />
      <JobStyle>
        <Container>
          <h1>{job.data.title.text}</h1>
          <div className="job-location">{job.data.location.text}</div>
          <div className="job-description">
            <RichText
              render={job.data.description.raw}
              linkResolver={linkResolver}
              htmlSerializer={prismicHtmlSerializer}
            />
          </div>
        </Container>
      </JobStyle>
    </Layout>
  )
}
export default Job
export const query = graphql`
  query JobByUid($uid: String!) {
    job: prismicJob(uid: { eq: $uid }) {
      uid
      data {
        description {
          html
          raw
        }
        location {
          text
        }
        teaser_description {
          html
        }
        title {
          text
        }
      }
    }
    site: allPrismicSiteInformation {
      nodes {
        data {
          meta_title {
            text
          }
          meta_description {
            text
          }
          description {
            text
          }
          site_url {
            text
          }
          site_title {
            text
          }
          twitter_author {
            text
          }
        }
      }
    }
  }
`
