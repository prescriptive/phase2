import styled from "styled-components"
import React from "react"
import Container from "../container"
import { RichText} from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import prismicHtmlSerializer from "../../gatsby/htmlSerializer"

const FaqStyle = styled.div`

`

export const FaqSlice = ({ slice }) => {

  console.log(slice)

  return (
    <FaqStyle>
          <Container className="faq-slice-container">
          {slice.items.map((qa, index) => (
            <div className="qa-container">
            <div className="faq-question">{qa.question.text}</div>
            <div className="faq-answer">
            <RichText
                render={qa.answer.raw}
                linkResolver={linkResolver}
                htmlSerializer={prismicHtmlSerializer}
              />
            </div>
            </div>
          )
          )}
          </Container>
    </FaqStyle>
  )
}

export default FaqSlice
