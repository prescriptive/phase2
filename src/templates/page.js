import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as variable from "../components/variables"
import styled from "styled-components"
import "../components/scss/page/careers.scss"
import "../components/scss/page/phase2.scss"
import "../components/scss/page/phase2new.scss"
import "../components/scss/page/faq.scss"
import SEO from "../components/seo"
import { ReactTypeformEmbed } from "react-typeform-embed"
import Helmet from "react-helmet"
import Video from "../components/video"

// import BasicSectionSlice from "../components/slices/BasicSectionSlice"
// import ColumnSectionSlice from "../components/slices/ColumnsSectionSlice"
// import LeftRightSlice from "../components/slices/LeftRightSlice"
// import EntityQuerySlice from "../components/slices/EntityQuerySlice"
// import HeroSlice from "../components/slices/HeroSlice"
// import BlockReferenceSlice from "../components/slices/BlockReferenceSlice"

import loadable from "@loadable/component"
import "../../node_modules/react-modal-video/scss/modal-video.scss"
import ModalVideo from "react-modal-video"
// Sort and display the different slice options
const PostSlices = ({ slices, blog, leadership, job, podcast, podinfo }) => {
  return slices.map((slice, index) => {
    var sliceID = ""
    if (slice.primary) {
      if (slice.primary.slice_id != undefined) {
        var sliceID = slice.primary.slice_id.text
      }
    }
    console.log(slice.slice_type)
    const res = (() => {
      switch (slice.slice_type) {
        case "basic_section":
          const BasicSectionSlice = loadable(() =>
            import(`../components/slices/BasicSectionSlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-basic"
            >
              {<BasicSectionSlice slice={slice} />}
            </div>
          )

        case "hero":
          const HeroSlice = loadable(() =>
            import(`../components/slices/HeroSlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-hero"
            >
              {<HeroSlice slice={slice} />}
            </div>
          )
        case "faq":
          const FaqSlice = loadable(() =>
            import(`../components/slices/FaqSlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-faq"
            >
              {<FaqSlice slice={slice} />}
            </div>
          )
        case "block_reference":
          const BlockReferenceSlice = loadable(() =>
            import(`../components/slices/BlockReferenceSlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-block-reference"
            >
              {<BlockReferenceSlice slice={slice} />}
            </div>
          )

        case "entity_query":
          const EntityQuerySlice = loadable(() =>
            import(`../components/slices/EntityQuerySlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-entity-query"
            >
              {
                <EntityQuerySlice
                  slice={slice}
                  blog={blog}
                  leadership={leadership}
                  job={job}
                  podcast={podcast}
                  podinfo={podinfo}
                />
              }
            </div>
          )

        // case "slideshow":
        //   return (
        //     <div
        //       id={"slice-id-" + slice.id}
        //       key={index}
        //       className="slice-wrapper slice-slideshow"
        //     >
        //       {/* {<EntityQuerySlice slice={slice} blog={blog} />} */}
        //     </div>
        //   )

        case "columns_section":
          const ColumnSectionSlice = loadable(() =>
            import(`../components/slices/ColumnsSectionSlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-columns"
            >
              {<ColumnSectionSlice slice={slice} />}
            </div>
          )

        case "left_right_section":
          const LeftRightSlice = loadable(() =>
            import(`../components/slices/LeftRightSlice`)
          )
          return (
            <div
              id={"slice-id-" + sliceID}
              key={index}
              className="slice-wrapper slice-left-right"
            >
              {<LeftRightSlice slice={slice} />}
            </div>
          )

        default:
          return
      }
    })()
    return res
  })
}

const PageStyle = styled.div`
  section {
    padding: ${variable.sectionPadding} 0px;
  }
  .modal-video-body {
    // max-width: 100%;
  }
`
const Page = ({ data }) => {
  //   const prismicContent = data.page.allPas.edges[0]
  //   if (!prismicContent) return null
  const node = data.page
  const leadership = data.leadership
  const podcast = data.podcast
  const job = data.job
  const site = data.site
  const podinfo = data.podinfo
  const blog = data.blog
  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <Layout slug={node.uid}>
        <SEO site={site} page={node} />
        <PageStyle style={{ minHeight: "800px" }}>
          {node.data.body && (
            <PostSlices
              slices={node.data.body}
              job={job}
              leadership={leadership}
              podcast={podcast}
              podinfo={podinfo}
              blog={blog}
            />
          )}
          {/* {node.data.youtube_popup_id.text && (
            <React.Fragment>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                allowFullScreen
                videoId={node.data.youtube_popup_id.text}
                onClose={() => setOpen(false)}
                height={height}
                width={width}
              />
              <button
                style={{ display: "none" }}
                className="youtube-open"
                onClick={() => setOpen(true)}
              >
                Open Video
              </button>
            </React.Fragment>
          )} */}
        </PageStyle>
      </Layout>
    </React.Fragment>
  )
}
export default Page

export const postQuery = graphql`
  query PageBySlug($uid: String!) {
    job: allPrismicJob {
      nodes {
        uid
        data {
          description {
            html
          }
          location {
            text
          }
          travel
          teaser_description {
            html
          }
          title {
            text
          }
        }
      }
    }
    page: prismicPa(uid: { eq: $uid }) {
      uid
      id
      type
      data {
        meta_title
        meta_description
        donotindex
        webinar
        typeform_url {
          text
        }
        youtube_popup_id {
          text
        }
        title {
          text
        }
        body {
          ... on PrismicPaBodyBlockReference {
            id
            primary {
              block_reference {
                document {
                  ... on PrismicBlocks {
                    id
                    data {
                      body {
                        ... on PrismicBlocksBodyColumnsSection {
                          id
                          slice_type
                          primary {
                            background_color
                            slice_id {
                              text
                            }
                            background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            column_count
                            font_color
                            h1_title
                            section_title {
                              text
                            }
                          }
                          items {
                            content {
                              raw
                            }
                          }
                        }
                        ... on PrismicBlocksBodyBasicSection {
                          id
                          slice_type
                          primary {
                            background_color
                            background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                          }
                          items {
                            sidebar_block_reference {
                              document {
                                ... on PrismicBlocks {
                                  id
                                  data {
                                    body {
                                      ... on PrismicBlocksBodyBasicSection {
                                        id
                                        slice_type
                                        primary {
                                          background_color
                                          background_video {
                                            url
                                          }
                                          youtube_background {
                                            embed_url
                                          }
                                          background_image {
                                            localFile {
                                              childImageSharp {
                                                fluid(maxWidth: 1920) {
                                                  ...GatsbyImageSharpFluid
                                                }
                                              }
                                            }
                                          }
                                          content {
                                            html
                                            raw
                                          }
                                          font_color
                                          h1_title
                                          section_title {
                                            text
                                          }
                                          slice_id {
                                            text
                                          }
                                        }
                                      }
                                    }
                                    block_title {
                                      text
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        ... on PrismicBlocksBodyLeftRightSection {
                          id
                          slice_type
                          primary {
                            active_campaign_form_number
                            embed {
                              raw
                            }
                            section_title {
                              text
                            }
                            left_background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            left_content {
                              html
                              raw
                            }
                            right_background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            right_content {
                              html
                              raw
                            }
                            right_embed {
                              raw
                            }
                            section_title {
                              text
                            }
                            slice_id {
                              text
                            }
                          }
                        }
                      }
                      block_title {
                        text
                      }
                    }
                  }
                }
              }
            }
            slice_type
          }
          ... on PrismicPaBodyFaq {
            id
            items {
              answer {
                raw
              }
              question {
                text
              }
            }
            slice_type
          }
          ... on PrismicPaBodySlideshow {
            id
            primary {
              background_color
              section_title {
                text
              }
            }
            slice_type
            items {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image_copy {
                html
              }
            }
          }
          ... on PrismicPaBodyBasicSection {
            id
            slice_type
            items {
              sidebar_block_reference {
                document {
                  ... on PrismicBlocks {
                    id
                    data {
                      block_title {
                        text
                      }
                      body {
                        ... on PrismicBlocksBodyBasicSection {
                          id
                          slice_type
                          primary {
                            background_color
                            background_video {
                              url
                            }
                            youtube_background {
                              embed_url
                            }
                            background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            content {
                              raw
                            }
                            font_color
                            h1_title
                            section_title {
                              text
                            }
                            slice_id {
                              text
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            primary {
              section_title {
                text
              }
              h1_title
              font_color
              background_color
              slice_id {
                text
              }
              background_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              background_video {
                url
              }
              youtube_background {
                embed_url
              }
              content {
                html
                raw
              }
            }
          }
          ... on PrismicPaBodyEntityQuery {
            id
            slice_type
            primary {
              entity_type
              number_of_entities
              slice_id {
                text
              }
              section_title {
                text
              }
              background_color
              background_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
          ... on PrismicPaBodyBlockReference {
            id
            primary {
              block_reference {
                document {
                  ... on PrismicBlocks {
                    id
                    data {
                      body {
                        ... on PrismicBlocksBodyColumnsSection {
                          id
                          slice_type
                          primary {
                            background_color
                            slice_id {
                              text
                            }
                            background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            column_count
                            font_color
                            h1_title
                            section_title {
                              text
                            }
                          }
                          items {
                            content {
                              raw
                            }
                          }
                        }
                        ... on PrismicBlocksBodyBasicSection {
                          id
                          slice_type
                          primary {
                            background_color
                            background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                          }
                          items {
                            sidebar_block_reference {
                              document {
                                ... on PrismicBlocks {
                                  id
                                  data {
                                    body {
                                      ... on PrismicBlocksBodyBasicSection {
                                        id
                                        slice_type
                                        primary {
                                          background_color
                                          background_video {
                                            url
                                          }
                                          youtube_background {
                                            embed_url
                                          }
                                          background_image {
                                            localFile {
                                              childImageSharp {
                                                fluid(maxWidth: 1920) {
                                                  ...GatsbyImageSharpFluid
                                                }
                                              }
                                            }
                                          }
                                          content {
                                            html
                                            raw
                                          }
                                          font_color
                                          h1_title
                                          section_title {
                                            text
                                          }
                                          slice_id {
                                            text
                                          }
                                        }
                                      }
                                    }
                                    block_title {
                                      text
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        ... on PrismicBlocksBodyLeftRightSection {
                          id
                          slice_type
                          primary {
                            active_campaign_form_number
                            embed {
                              raw
                            }
                            section_title {
                              text
                            }
                            left_background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            left_content {
                              html
                              raw
                            }
                            right_background_image {
                              localFile {
                                childImageSharp {
                                  fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid
                                  }
                                }
                              }
                            }
                            right_content {
                              html
                              raw
                            }
                            right_embed {
                              raw
                            }
                            section_title {
                              text
                            }
                            slice_id {
                              text
                            }
                          }
                        }
                      }
                      block_title {
                        text
                      }
                    }
                  }
                }
              }
            }
            slice_type
          }
          ... on PrismicPaBodyHero {
            id
            slice_type
            primary {
              background_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              font_color
              min_height
              hero_title {
                text
              }
            }
          }
          ... on PrismicPaBodyColumnsSection {
            id
            slice_type
            primary {
              background_color
              column_count
              slice_id {
                text
              }
              background_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              section_title {
                text
              }
              h1_title
              font_color
            }
            items {
              content {
                html
                raw
              }
            }
          }

          ... on PrismicPaBodyLeftRightSection {
            id
            slice_type
            primary {
              left_width
              right_width
              slice_id {
                text
              }
              section_title {
                text
              }
              embed {
                text
              }
              right_embed {
                text
              }
              active_campaign_form_number
              right_active_campaign_form_number
              right_content_above_form {
                raw
              }
              left_background_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              right_background_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              right_content {
                html
                raw
              }
              left_content {
                html
                raw
              }
            }
          }
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
