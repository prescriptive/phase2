import styled from "styled-components"
import * as variable from "../components/variables"
const Container = styled.div`
  max-width: ${variable.desktopWidth};
  display: block;
  margin: auto 10%;
  @media (max-width: ${variable.tabletWidth}) {
    max-width: ${variable.tabletWidth};
  }
  @media (max-width: ${variable.mobileWidth}) {
    max-width: ${variable.mobileWidth};
    margin: auto 5%;
  }
`

export default Container
