import React from "react"
import Container from "../container"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import prismicHtmlSerializer from "../../gatsby/htmlSerializer"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
export const TabsSlice = ({ slice, tab }) => {
  console.log(slice)
  console.log(tab)
  return (
    <Container className="tabs-slice">
      <Tabs defaultIndex={tab}>
        <TabList>
          {slice.items.map((tab, index) => (
            <Tab key={index}>{tab.tab_title.text}</Tab>
          ))}
        </TabList>
        {slice.items.map((tab, index) => (
          <TabPanel key={index}>
            <RichText
              render={tab.tab_content.raw}
              linkResolver={linkResolver}
              htmlSerializer={prismicHtmlSerializer}
            />
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  )
}

export default TabsSlice
