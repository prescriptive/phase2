import styled from "styled-components"
import React from "react"
import Container from "../container"
import { RichText} from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import prismicHtmlSerializer from "../../gatsby/htmlSerializer"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

const FaqStyle = styled.div`

`

export const FaqSlice = ({ slice }) => {

  console.log(slice)

  return (
    <FaqStyle>
          <Container className="faq-slice-container">
          <Accordion allowMultipleExpanded allowZeroExpanded>
          {slice.items.map((qa, index) => (


<AccordionItem>
<AccordionItemHeading>
    <AccordionItemButton>
    {qa.question.text}
    </AccordionItemButton>
</AccordionItemHeading>
<AccordionItemPanel>
<RichText
                render={qa.answer.raw}
                linkResolver={linkResolver}
                htmlSerializer={prismicHtmlSerializer}
              />
</AccordionItemPanel>
</AccordionItem>


          )
          )}
 
        </Accordion>

          </Container>
    </FaqStyle>
  )
}

export default FaqSlice
