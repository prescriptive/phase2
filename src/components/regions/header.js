import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "../container"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import * as variable from "../variables"
import MobileMenu from "../mobileMenu"
import headerImage from "../../images/gearnewcrop.png"

const HeaderStyle = styled.header`
  /* position: absolute;
    width: 100%;
    z-index:9; */
  // background-image:linear-gradient(119.79deg, #97231c 0%, #d0482c 67.37%, #f46036 118.87%);
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: cover;
  
  padding-bottom: 15px;
  .the-header-container {
    position: relative;
  }
  .header-social-container {
    background-color: ${variable.darkGray};
    padding: 12px 0px;
    @media (max-width: ${variable.tabletWidth}) {
      display: none;
    }
    .social-container {
      display: flex;
      justify-content: flex-end;
    }
    svg {
      font-size: 30px;
      path {
        color: white;
      }
    }
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    padding-bottom: 24px;
    @media (max-width: ${variable.mobileWidth}) {
      padding-top: 30px;
      padding-bottom: 30px;
    }
  }
  .logo {
    max-width: 293px;
    width: 293px;
    .gatsby-image-wrapper {
      padding: 0px 1px;
    }
    img {
      max-width: 100%;
    }
  }
  .back-to-pre {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /* position:absolute;
    padding-left: inherit;
    padding-right: inherit;
    position: absolute;
    left: 0;
    right: 0; */
    @media (max-width: ${variable.mobileWidth}) {
      display: none;
    }
    a {
      background-color: #ea7662;
      color: ${variable.offWhite};
      display: block;
      border-radius: 0px 0px 6px 6px;
      padding: 5px 15px;
    }
  }

  .mobile-menu-container {
    width: 55px;
    margin-left: 20px;
  }
  ul.main-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    li {
      list-style: none;
      margin-right: 50px;
      position: relative;
      &:last-child {
        margin-right: 0px;
      }
      a {
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: 400;
        padding: 20px 0px;
        position: relative;
        top: 6px;
        &:hover {
          text-decoration: underline;
        }
        &[aria-current] {
          text-decoration: underline;
        }
      }
      .sub-menu {
        display: none;
        background-color: ${variable.medLightGray};
        padding: 10px 20px 0px 20px;
        border: 1px solid #dadde9;
        position: absolute;
        top: 40px;
        left: -35px;
        z-index: 100;
        border-radius: 2px;
        min-width: 145px;
        animation-duration: 4s;
        a {
          color: white;
          font-size: 16px;
          margin-bottom: 10px;
          display: block;
          text-transform: capitalize;
          padding: 0px;
          font-weight: bold;
          &:hover {
            color: ${variable.red};
          }
        }
      }
      &:hover .sub-menu {
        display: block;
      }
    }
  }
  .mobile-menu-container {
    display: none;
  }
  @media (max-width: ${variable.mobileWidth}) {
    .mobile-menu-container {
      display: block;
    }
    ul.main-menu {
      display: none;
    }
  }
`
const activeStyle = {
  textDecoration: "underline",
}

function menuRender(menuitem) {
  if (
    menuitem.items[0].sub_nav_link_label.text != "" &&
    menuitem.items[0].sub_nav_link_label.text != "Dummy"
  ) {
    return (
      <div>
        <Link activeStyle={activeStyle} to={menuitem.primary.link.url}>
          {menuitem.primary.label.text}
        </Link>
        <div className="sub-menu">
          {menuitem.items.map((submenuitem, index) => (
            <div key={index}>
              {submenuitem.sub_nav_link.url && (
                <Link
                  activeStyle={activeStyle}
                  to={submenuitem.sub_nav_link.url}
                >
                  {submenuitem.sub_nav_link_label.text}
                </Link>
              )}
              {submenuitem.relative_link.text && (
                <Link
                  activeStyle={activeStyle}
                  to={submenuitem.relative_link.text}
                >
                  {submenuitem.sub_nav_link_label.text}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    if (menuitem.primary.link.url != "") {
      return (
        <Link activeStyle={activeStyle} to={menuitem.primary.link.url}>
          {menuitem.primary.label.text}
        </Link>
      )
    }
    if (menuitem.primary.relative_link) {
      return (
        <Link
          activeStyle={activeStyle}
          to={menuitem.primary.relative_link.text}
        >
          {menuitem.primary.label.text}
        </Link>
      )
    }
  }
}

export const Header = () => {
  const data = useStaticQuery(graphql`
    query menu {
      twittericon: file(relativePath: { eq: "tweeticon.png" }) {
        childImageSharp {
          fixed(width: 30, height: 24) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      site: allPrismicSiteInformation {
        nodes {
          data {
            nav {
              ... on PrismicSiteInformationNavNavItem {
                id
                items {
                  sub_nav_link {
                    url
                    link_type
                  }
                  sub_nav_link_label {
                    text
                  }
                  relative_link {
                    text
                  }
                }
                primary {
                  label {
                    text
                  }
                  link {
                    url
                    link_type
                  }
                  relative_link {
                    text
                  }
                }
              }
            }
            logo {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
            twitter {
              url
            }
          }
        }
      }
    }
  `)
  const nav = data.site.nodes[0].data.nav
  console.log(data)
  // const logo = data.site.nodes[0].data.logo.localFile.childImageSharp.fluid
  const twittericon = data.twittericon.childImageSharp.fixed
  var twitter = null
  if (data.site.nodes[0].data.twitter) {
    var twitter = data.site.nodes[0].data.twitter.url
  }
  return (
    <HeaderStyle className="header">
      <Container className="the-header-container">
        <div class="back-to-pre">
          <a href="https://www.prescriptive.solutions">
            Go to Prescriptive Solutions
          </a>
        </div>
        <div className="header-container">
          <Link className="logo" to="/">

          </Link>
          <div className="mobile-menu-container">{<MobileMenu />}</div>
          <ul className="main-menu">
            {nav.map((menuitem, index) => (
              <li key={index}>{menuRender(menuitem)}</li>
            ))}
          </ul>
        </div>
      </Container>
    </HeaderStyle>
  )
}

export default Header
