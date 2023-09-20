import React, { Fragment } from "react"
import Container from "../container"
import { RichText } from "prismic-reactjs"
import linkResolver from "../../utils/linkResolver"
import prismicHtmlSerializer from "../../gatsby/htmlSerializer"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const PostSlices = ({ tab }) => {
  return tab.map((slice, index) => {
    var sliceID = ""
    if (slice.primary) {
      if (slice.primary.slice_id[0] != undefined) {
        var sliceID = slice.primary.slice_id[0].text
      }
    }
    console.log(slice)
    const res = (() => {
      switch (slice.slice_type) {
        case "basic_text":
          return (
            <div id={sliceID}>
              {slice.primary.sub_title[0] && (
                <h3 className="tab-sub-title">
                  {slice.primary.sub_title[0].text}
                </h3>
              )}
              <RichText
                render={slice.items[0].basic_rich_text}
                linkResolver={linkResolver}
                htmlSerializer={prismicHtmlSerializer}
              />
            </div>
          )
        case "left_right":
          return (
            <div id={sliceID}>
              <div className="tab-left-right-container">
                <div className="tab-left">
                  <RichText
                    render={slice.items[0].left_rich_text}
                    linkResolver={linkResolver}
                    htmlSerializer={prismicHtmlSerializer}
                  />
                </div>
                <div className="tab-right">
                  <RichText
                    render={slice.items[0].right_rich_text}
                    linkResolver={linkResolver}
                    htmlSerializer={prismicHtmlSerializer}
                  />
                </div>
              </div>
            </div>
          )
        default:
          return
      }
    })()
    return res
  })
}

// Sort and display the different slice options
// const PostSlices = ({ tab }) => {
//   if (tab.slice_type == "basic_text") {
//     console.log(tab.items)
//     tab.items.map((tabbody) => {
//       console.log(tabbody)
//       return "test"
//     })
//   }
//   if (tab.slice_type == "left_right") {
//     return <h2>leftright</h2>
//   }
//   return
// }

const TabNewSlice = ({ slice, tab }) => {
  const [tabNum, setTabNum] = useQueryParam("tab", NumberParam)
  console.log(slice)
  return (
    <Container className="tabs-slice">
      <Tabs defaultIndex={tab} onSelect={(index) => setTabNum(index + 1)}>
        <TabList>
          {slice.items.map((tab, index) => (
            <Fragment>
              <Tab key={index}>
                <h2>{tab.tab.document.dataRaw.tab_title[0].text}</h2>
              </Tab>
            </Fragment>
          ))}
        </TabList>
        {slice.items.map((tabbody, index) => (
          <TabPanel key={index}>
            <PostSlices tab={tabbody.tab.document.dataRaw.body} />
          </TabPanel>
        ))}
      </Tabs>
    </Container>
  )
}

export default TabNewSlice
