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
// import 'react-accessible-accordion/dist/fancy-example.css';

const FaqStyle = styled.div`
.accordion__button{
  padding:20px 0px;
  font-size:27px;
  font-weight:bold;
  &:focus{
    border:0px;
    outline:none;
  }
}
.accordion__button:before {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid;
    border-right: 2px solid;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: -3px;
    position: relative;
}
.accordion__button[aria-expanded=true]:before, .accordion__button[aria-selected=true]:before {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
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
