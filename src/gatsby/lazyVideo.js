import React from "react"
import ResponsiveEmbed from "react-responsive-embed"

export const LazyVideo = ({ video_id }) => {
  return (
    <ResponsiveEmbed
      className="lazyframe"
      src={"https://www.youtube.com/embed/" + video_id}
    />
  )
}

export default LazyVideo
