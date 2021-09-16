import React, { Suspense } from "react"
import { Link } from "gatsby"
// import Video from "../components/video"
// import SignUp from "../components/signup"
const linkResolver = (doc, content, linkClass) => {
  // Route for blog posts
  if (doc.type === "blog_post") {
    return (
      <Link to={"/blog/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  if (doc.uid === "learn-how-to-protect-microsoft-365-data") {
    return (
      <Link to={"/webinars/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  if (doc.type === "pa") {
    return (
      <Link to={"/" + doc.uid} className={linkClass}>
        {content}
      </Link>
    )
  }
  // Homepage route fallback
  return (
    <Link to={"/"} className={linkClass}>
      {content}
    </Link>
  )
}

function toggleVideo() {
  var y = document.getElementsByClassName("youtube-open")
  var aNode = y[0]
  aNode.click()
}
function toggleTypeForm() {
  var y = document.getElementsByClassName("typeform-share")
  var aNode = y[0]
  aNode.click()
}

// const AmazonFrame = lazy(() => import(Test))
const LazyTypeform = React.lazy(() => import("./lazyTypeform"))
// const LazyAudiofile = React.lazy(() => import("./lazyAudiofile"))
const LazySignup = React.lazy(() => import("./lazySignup"))
const LazyVideo = React.lazy(() => import("./lazyVideo"))

const HtmlSerializer = (type, element, content, children) => {
  var link = ""

  switch (type) {
    case "embed":
      if (element.oembed.type == "video") {
        console.log(element)
        console.log(element.oembed.embed_url)
        var video_id = element.oembed.embed_url.split("v=")[1]
        var ampersandPosition = video_id.indexOf("&")
        if (ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition)
        }
        console.log(video_id)
        // lazyframe(".lazyframe")
        return (
          <Suspense fallback={<div></div>}>
            <LazyVideo video_id={video_id}></LazyVideo>
          </Suspense>
        )
      }
    case "label":
      if (element.data.label) {
        // if (element.data.label == "youtube-popup") {
        //   return (
        //     <Video className="youtube-popup">{content}</Video>
        //     // <span className="youtube-popup" onClick={() => toggleVideo()}>
        //     //   {content}
        //     // </span>
        //   )
        // }
        if (element.data.label == "typeform-cta") {
          return (
            <Suspense fallback={<div></div>}>
              <span className="typeform-cta">
                {content}
                <LazyTypeform></LazyTypeform>
              </span>
            </Suspense>
          )
        }
        if (element.data.label == "sign-up") {
          return (
            <Suspense fallback={<div></div>}>
              <LazySignup></LazySignup>
            </Suspense>
          )
        }
      }
    case "hyperlink":
      if (element.data.link_type == "Document") {
        if (children[0].props != null) {
          var linkClass = children[0].props.className
          if (children[0].props.className != undefined) {
          } else {
            var linkClass = ""
          }
        }
        link = linkResolver(element.data, content, linkClass)
      }
      return link
    case "image":
      const width = element.dimensions.width ? element.dimensions.width : ""
      const height = element.dimensions.height ? element.dimensions.height : ""
      const alt = element.alt ? element.alt : ""
      if (element.url) {
        return (
          <p className="block-img">
            <img src={element.url} width={width} height={height} alt={alt} />
          </p>
        )
      } else {
        return ""
      }
    // First differentiate between a label and a preformatted field (e.g. the Code Block slice)
    default: {
      return null
    }
  }
}

// module.exports = htmlSerializer
export default HtmlSerializer
