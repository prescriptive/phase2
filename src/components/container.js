import styled from "styled-components"
import * as variable from "../components/variables"
const Container = styled.div`
  max-width: ${variable.desktopWidth};
  display: block;
  padding: 0px 10%;
  margin: 0 auto;
  @media (max-width: ${variable.tabletWidth}) {
    max-width: ${variable.tabletWidth};
  }
  @media (max-width: ${variable.mobileWidth}) {
    max-width: ${variable.mobileWidth};
    padding: 0px 5%;
  }
`

export default Container
