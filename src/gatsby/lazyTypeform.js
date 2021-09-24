import React, { Suspense } from "react"

const LazyTypeformInner = React.lazy(() => import("./lazyTypeformInner"))

class LazyTypeform extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentWillMount() {
    if (this.state.loaded === true) {
    } else {
      window.addEventListener("mousemove", this.handleLoad)
      window.addEventListener("touchmove", this.handleLoad)
    }
  }

  handleLoad = () => {
    this.setState({ loaded: true })
    console.log(this.state.loaded)
    window.removeEventListener("mousemove", this.handleLoad)
    window.removeEventListener("touchmove", this.handleLoad)
    // const { open, close, toggle, refresh } = createPopup("LkNfiuv4")
    // createPopup("LkNfiuv4")
  }
  render() {
    return this.state.loaded ? (
      <Suspense fallback={<div></div>}>
        <LazyTypeformInner></LazyTypeformInner>
      </Suspense>
    ) : (
      ""
    )
  }
}
// export const LazyVideo = ({ video_id }) => {
//   return (
//     <ResponsiveEmbed
//       className="lazyframe"
//       src={"https://www.youtube.com/embed/" + video_id}
//     />
//   )
// }

export default LazyTypeform
