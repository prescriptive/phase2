import React from "react"
import styled from "styled-components"
import Container from "../container"
import * as variable from "../variables"
import { Link } from "gatsby"

const FooterStyle = styled.footer`
  padding: 24px 0px;
  background-color: ${variable.trueBlue};
  text-align: center;
  color: white;
  div {
    color: white;
  }
  a {
    color: white;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Footer = () => {
  return (
    <FooterStyle>
      <Container className="footer-container">
        <div>
          &copy; {new Date().getFullYear()}{" "}
          <a href="https://prescriptive.solutions" target="_blank">
            Prescriptive Data Solutions
          </a>
        </div>
        <div>
          <a
            style={{ color: "white", marginTop: "10px", display: "block" }}
            href="https://www.prescriptive.solutions/prescriptive-data-solutions-llc-privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>
        </div>
      </Container>
    </FooterStyle>
  )
}

export default Footer
