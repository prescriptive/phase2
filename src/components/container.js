import styled from "styled-components"
import * as variable from "../components/variables"
const Container = styled.div`
  max-width: ${variable.desktopWidth};
  display: block;
  margin: 0 auto;
  padding: 0px 10%;
  box-sizing: content-box;
  @media (max-width: ${variable.tabletWidth}) {
    max-width: ${variable.tabletWidth};
  }
  @media (max-width: ${variable.mobileWidth}) {
    max-width: ${variable.mobileWidth};
    /* margin: auto 5%; */
    padding: 0px 5%;
  }
`

export default Container
