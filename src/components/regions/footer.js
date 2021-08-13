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
`

export const Footer = () => {
  return (
    <FooterStyle>
      <Container className="footer-container">
        <div>&copy; {new Date().getFullYear()} Prescriptive Data Solutions</div>
        <div>
          <Link
            style={{ color: "white", marginTop: "10px", display: "block" }}
            to="privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </Container>
    </FooterStyle>
  )
}

export default Footer
